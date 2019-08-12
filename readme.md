# DateLib
A wrapper for the Javascipt Date Object

## Definition Parameters
CustomDate can be created the same way as a Javascript Date object.  You can define it with date parameters, or with no parameters, which will instantiate it as the current date.
## Getting Properties
* __customDate.year__  
  returns the year defined in the customDate object
  ```js
  d.year // => 2019
  ```
* __customDate.month__  
  returns the month defined in the customDate object
  ```js
   d.month // => March
  ```
* __customDate.day__  
  returns the day of the month defined in the customDate object 
  range is 0-30
  ```js
   d.day // => 23
  ```
* __customDate.hour__  
  returns the hour defined in the customDate object  
  range is 0-23
  ```js
   d.hours // => 9
  ```
* __customDate.minute__  
  returns the minute defined in the customDate object 
  range is 0-60
  ```js
   d.minutes // => 34
  ```
* __customDate.second__  
  returns the second defined in the customDate object  
  range is 0-60
  ```js
   d.seconds // => 12
  ```

## Methods
* __customDate.format(formString)__  
  The format method allows you to define a custom formatted output based on a few custom Characters.
  The characters are listed below.
  ```js
  {
  'Y': 2019, // full year
  'y': 19, // shortened year
  'M': "July", // full month
  'm': "Jul", // shortened month
  'D': 01, // full day
  'd': 1, //shortened day
  'H': 05, // full hour
  'h': 5, // shortened hour
  'I': 08, // full minute
  'i': 8, //shortened minute
  'S': 04, //full second
  's': 4, //shortened second
  }
  myDate.format("M-d-Y") //=> "January-6-2019"
  myDate.format("m:d:y") //=> "Jan:6:19"
  myDate.format('Y-M-D h:I:S')) // => 2019-January-06 6:54:35
  ```
  If the format string is left empty, it will default to M/d/Y

  
* `customDate.when(referenceDate)`
  The when method will return a string representaion of the difference between the reference date, and the date stored in the customDate object.  The reference date defaults to the current date.
  ```js
  myDate.when() // => "6 months ago"
  aDifferentDate.when() // => "4 months from now"
  b.when() // => "2 days ago"
  c.when() // => "1 year ago"
  ```

  