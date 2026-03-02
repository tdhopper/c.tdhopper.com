---
title: Go from a Pythonista's Perspective
date: 2020-07-20
categories:
  - article
tags:
  - Python
  - Go
---

Recently, I've had my first opportunity to dive into the [Go programming language](https://golang.org). Most of my career has been as a Python developer, but given how frequently they are [compared](https://getstream.io/blog/switched-python-go/), Go seemed like a natural language to try.

Before I move on to other things, I wanted to capture my reflections on Go, particularly as it compares to my experience with Python.

## The good

### Go runs really quickly

Core to the promises of the Go language is its ability to compile and run quickly. It lives up to these promises! It felt like the only time I ever spent waiting for something to happen was when Go was downloading dependencies.

### `go build` just works

One of the notorious challenges of Python is with packaging and deployment. With Go, `go build` downloads dependencies and generates a binary that can be run anywhere.

Even more remarkably, Go allows you to [build binaries for multiple system architectures](https://www.digitalocean.com/community/tutorials/building-go-applications-for-different-operating-systems-and-architectures) without running that architecture. For example, a Mac user can build a Go binary that will run natively on Windows. Python wheels, on the other hand, require access to a given architecture to build (non-universal) binaries.

### Go Modules is a big improvement

When I first tried Go several years ago, I didn't last long beyond being told that all my source code and dependencies had to live in my GOPATH directory.

With the recent introduction of [Go Modules](https://blog.golang.org/using-go-modules), this absurd restriction has been lifted. Go projects can live anywhere on your computer, and the Go compiler automatically downloads and installs your dependencies.

### Go bans unused variables and imports

The Go compiler fails to build code with unused imports or variables. I replicate this behavior in Python projects by running flake8 as a pre-commit or continuous integration check. Having it built into the compiler itself was a nice surprise.

### VS Code wins again

The Go extension for VS Code, like the Python extension, is powerful, helpful, and free.

### Garbage collection is nice

I can't comment on the performance of the Go garbage collector, however I'm glad it has one. Go is heavily inspired by C, but it's better for almost everyone by not making us manage our own memory.

### JSON marshaling is neat

For better or worse, JSON data makes the world go 'round. A delightful aspect of Go is its ability to automatically convert JSON to Go structs and Go structs to JSON. You decorate your struct fields with tags that map to JSON keys, and the standard library handles the rest. Coming from Python, where you're often writing serialization boilerplate or reaching for a third-party library like marshmallow, this felt refreshingly clean.

## The bad

### Tooling is rough around the edges

Go's tooling _mostly_ works well, but I found some rough edges. The `go get` command conflates downloading a dependency with installing a binary, which is confusing. And while `gofmt` is great in principle (I wish Python had a single blessed formatter[^1]), the broader tooling ecosystem felt immature compared to what I'm used to in Python.

### Simple things are hard

In Python, if I want to filter a list, I write a list comprehension:

```python
evens = [x for x in numbers if x % 2 == 0]
```

In Go, this requires a manual for loop with an append:

```go
var evens []int
for _, x := range numbers {
    if x % 2 == 0 {
        evens = append(evens, x)
    }
}
```

This kind of thing comes up constantly. Operations that are one-liners in Python --- filtering, mapping, flattening --- all become multi-line loops in Go. I know Go values explicitness, but there's a point where explicitness just means more code to read and more opportunities for off-by-one errors.

### Standard data structures are limited

Go gives you slices and maps, and that's about it. There's no built-in set type, which surprised me. In Python, I use sets all the time for membership tests and deduplication. In Go, the idiomatic workaround is `map[string]bool` or `map[string]struct{}`, which works but reads like a hack.

More broadly, the standard library doesn't provide many of the collection types and utilities I take for granted in Python: no ordered dict, no default dict, no counter. You end up writing the same boilerplate data structure code from project to project.

### Is the type system all it's chalked up to be?

Go's [own documentation](https://golang.org/doc) describes it as "a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language." I think they're right that it _feels_ lightweight, but I'm not convinced Go's type system catches substantially more bugs than Python with [mypy](http://mypy-lang.org/) and a good linter.

Go's type system is simple, which is both its strength and weakness. You get basic type safety, but you don't get sum types, pattern matching, or many of the features that make type systems in languages like Rust or Haskell genuinely powerful at preventing bugs. Meanwhile, mypy has gotten good enough that most of my Python type errors get caught before runtime anyway.

### Lack of generics

At the time of writing, Go has no generics.[^2] This means you can't write a function that, say, finds the maximum element of any ordered type. Instead, you write the same function for `int`, `float64`, `string`, and so on --- or you fall back on `interface{}` and lose the type safety that Go is supposed to provide.

The lack of generics is the root cause of the "simple things are hard" problem. You can't write a generic `filter` or `map` function, so you end up writing loops. It's the most commonly cited frustration with Go, and for good reason.

### Testing feels painful

Go's built-in testing package is minimal to a fault. There's no built-in assertion library, so instead of writing something like Python's `self.assertEqual(got, expected)`, you write:

```go
if got != expected {
    t.Errorf("got %v, want %v", got, expected)
}
```

For every. Single. Test. Case. It's tedious and error-prone. Python's pytest, with its simple `assert` statements and automatic diffs, is a world apart. I know third-party assertion libraries exist for Go, but the community seems to view them with suspicion.

Table-driven tests are the idiomatic approach in Go, and they're fine for simple cases. But the overall testing experience felt like a step backward from the Python ecosystem.

### No exception handling

Go replaces exceptions with multiple return values: functions return both a result and an error, and you check the error after every call. The result is code like this:

```go
result, err := doSomething()
if err != nil {
    return err
}
```

You see this pattern _everywhere_. It clutters the code and obscures the main logic. In Python, I can write the happy path clearly and handle exceptions where it makes sense. In Go, error handling is interleaved with every step of the business logic.

I understand the argument for explicit error handling --- unhandled exceptions are a real source of bugs. But Go's approach trades one problem for another: instead of accidentally swallowing exceptions, you accidentally ignore returned errors. And the visual noise of `if err != nil` on every other line is real.

### Haven't gotten into concurrency

Go's goroutines and channels are supposedly the crown jewel of the language, and I believe it. Concurrency is the use case where Go's design makes the most sense. Unfortunately, I haven't had the chance to work on anything concurrency-heavy yet, so I can't speak to this from experience. I suspect this is where Go would really shine compared to Python's GIL-constrained threading.

## Conclusion

Go is a fine language, and I can see why it's popular for building networked services and infrastructure tools. The compilation speed, the deployment story, and the concurrency model are genuine strengths that Python can't match.

But for the kind of work I do --- data processing, scripting, exploratory analysis --- Python is still a better fit. The expressiveness of the language, the richness of the standard library, and the depth of the ecosystem (numpy, pandas, scikit-learn) make it hard to leave. Go felt like trading expressiveness for performance, and for many of my use cases, that's not a trade I need to make.

If you're a Pythonista considering Go, I'd say: try it. You'll appreciate some things about it, and it'll give you a new perspective on your Python code. But don't feel like you need to switch.

[^1]: [Black](https://github.com/psf/black) is close to this, but it's not universally adopted the way `gofmt` is for Go.
[^2]: Go generics were [proposed](https://blog.golang.org/generics-next-step) and have been a long time coming. I look forward to seeing how they change the language.
