---
title: "Weather Forecast Data Formats and Tools"
date: 2021-06-21
categories:
    - Article
---

Weather forecasts (like WRF, HRRR, etc.) are high-dimensional gridded data. They include projection information and other metadata, and there are several file formats used to store them. Here's what I've learned about these formats and the tools for working with them.

## GRIB: GRIdded BInary Data

The World Meteorological Organization (WMO) Commission for Basic Systems (CBS) created the GRIB format in 1985. GRIB1 was released in 1994, and GRIB2 was released in 2003. Most GRIB data you'll encounter today is GRIB2.

## netCDF

NetCDF is a set of software libraries and self-describing, machine-independent data formats that support the creation, access, and sharing of array-oriented scientific data. It was developed and is maintained at Unidata.

NetCDF 1.0 was released in 1998, and it's now up to version 4.8. The format is strictly backwards compatible and almost entirely cross-compatible between language APIs. The canonical implementations of the spec are C and Java libraries.

You'll often hear that netCDF files are much bigger than GRIB2 files. NetCDF4 does support zlib compression, though it may not compress as well as GRIB2. NetCDF4 files can be (and typically are) stored in HDF5 format, so you can inspect them with either `ncinfo` or `h5dump`.

### The Data Model

A netCDF file has three key components:

- **Dimensions**: the shape of variables
- **Variables**: the actual data
- **Attributes**: metadata for the dataset or individual variables

NetCDF-4 also adds groups with named subgroups.

### `ncdump` CLI

`ncdump` dumps a netCDF file as plain text. Useful flags:

- `-v`: select a variable
- `-h`: header only
- `-x`: XML output

### `ncgen`

`ncgen` turns Common Data Format (CDL) text into a netCDF binary file:

```bash
ncgen -b example.cdl
```

Both `ncgen` and `ncdump` are part of the core netCDF library.

### xarray

xarray is a Python library built on the netCDF data model. Data is always loaded lazily from netCDF files: you can manipulate, slice, and subset Dataset and DataArray objects without loading array values into memory until you perform actual computation.

```python
import xarray as xr
ds = xr.open_dataset('example.nc')
ds.to_dataframe()
```

NetCDF is the standard way to serialize data from xarray.

### NCO (NetCDF Operators)

NCO is a collection of command-line tools for working with netCDF files. The tools take netCDF, HDF, and/or DAP files as input and can derive new data, compute statistics, print content, hyperslab, manipulate metadata, and output results in text, binary, or netCDF formats.

#### `ncks` (Kitchen Sink)

`ncks` combines most features of `ncdump` and `nccopy` with extra capabilities for extraction, hyperslabbing, subsetting, and translation:

```bash
# Copy a file (the copy includes history)
ncks example.nc copy.nc

# Select a variable
ncks -v WIND_6000maboveground wrf.nc

# Print as CDL (like ncdump)
ncks --cdl example.nc

# Compress with level 5 compression (-4 required for netCDF4)
ncks wrf.nc -4 -L5 wrf_compressed.nc
```

There's also extensive functionality for concatenation, appending, summary statistics, and comparing files.

#### Other NCO Tools

- `ncrcat`/`ncecat`: concatenation (which one to use depends on whether you already have a record dimension like time)
- `ncra`: average over time
- `ncwa`: weighted averages

### Converting netCDF to GRIB

The CDO (Climate Data Operators) library can convert between formats:

```bash
cdo -f grb2 copy wrf.nc wrf_from_nc.gr2
```

Fair warning: this doesn't always work cleanly.

## Takeaways

- Complicated datasets are complicated!
- There is more than one way to do everything.
- With some basic commands, you can inspect any of these file types.
- Converting between formats is often straightforward.
- All of these tools are available through Conda and conda-forge.

## Resources

- [CDO (Climate Data Operators)](https://code.mpimet.mpg.de/projects/cdo)
- [GRIB tools examples](https://confluence.ecmwf.int/display/ECC/GRIB+tools+examples)
- [README on Formats (UCAR)](https://rda.ucar.edu/datasets/ds083.2/software/README_Formats.pdf)
- [Intro to GRIB2 (PDF)](https://www.ftp.cpc.ncep.noaa.gov/wd51we/wgrib2/intro_grib2.pdf)
- [GRIB2 Spec](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/)
- [NetCDF Intro (2014 Presentation)](https://www.unidata.ucar.edu/presentations/Rew/netcdf-intro-2014.pdf)
- [NCO Basics (PDF)](http://research.atmos.ucla.edu/csi/GROUP/tips/NCO_basics_N.Berg2013.pdf)
