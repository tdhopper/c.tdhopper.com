---
title: Testing whether a Python string contains an integer
date: Fri, 29 Apr 2016 15:13:00 +0000
tags:
    - python
categories: 
    - How To
---
If you want to check whether a Python string is an integer, you can try
casting to an int with `int()` and catching the `ValueError` if it's not an
integer:

    
    
```python
def is_integer(value: str, *, base: int=10) -> bool:
    try:
        int(value, base=base)
        return True
    except ValueError:
        return False
```

To check for _nonnegative_ integers, you can use the [`str.is_digit()`
method](https://docs.python.org/3.8/library/stdtypes.html#str.isdigit). It
will "return true if all characters in the string are digits and there is at
least one character, false otherwise:


```python
>>> "123".isdigit()
True
>>> "-123".isdigit()
False
```

Thanks to [Jeremy Kahn for reminding
me](https://twitter.com/trochee/status/726162607460114433) that `isdigit` only
detects positive integers.
