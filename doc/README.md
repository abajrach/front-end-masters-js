[TOC]

* Best code is the one that is less to read

#### Functions

* Functions should have a return value, otherwise it is not a function. It is a procedure. 
* Something that calls procedure is also a procedure, not a function
* Function is a semantic relationship between inputs and computed outputs
* No side effects
	* No indirect inputs and outputs
	* Avoid them where possible

#### Pure functions
* Pure functions acts in isolation. Given a input, it always returns the same output
* Function purity: Level of confidence

#### Arguments

* Unary\Binary functions
* javascript variatic functions?

#### Adapters
* Flip -> takes in a function that accepts arguments and flips the arguments
* Reverse -> Reverses the arguments list

#### Point-free?
* *Equational Reasoning*?
	* If two functions have same shape,then they are inter-changeable
* Reason for using point-free is to make it declarative
* mod & eq example


#### Closure?
* Closure is not necessarily pure function


#### Lazy vs Eager loading

* Lazy loading: Defering work for later
	* Work will only happen 10% of the case, not 90%
	* Happens everytime you call it
* Eager: 
	* Work only happens once. Gets cached.
* memoize() function
	* Cost: maintains internal cache. Good if function gets called with same argument a lot of time. 

#### Pure function definition
* If the output of a function call can be replaced with the function call, then it is pure function
* *Referential transparency*
	* Allows reader of code to be able to look at line and know what it does

#### Generalization vs specialization
* Parameter order should be general to specific

#### Currying?
* Partial Application vs Currying?

#### Composition
* Abstraction is about separting, not hiding
* Composition is declarative data flow
* Composition is associative. 


#### Immutability
* With const, you cannot re-assign the variable to another
* Read-only datastructures are ds that never need to be mutated
* Don't mutate, make a copy of variable and do your thing
* Annotate with Object.freeze() to let readers know that the variable is read-only
* When you receive DS, assume that it is read-only
* Immutable data structures
	* Only contains the diff of the change
	* Doesn't exist natively in javascript
	* Immutable JS -> library from Facebook
	* Mory

#### Recursion
* Do count num of vowels in a string problem using recursion in java
* tail calls
	* keep only one stack frame
	* Proper tail calls (PTC)
		* tail calls gets memory optimized
		* requires return statement
	* TCO
		* family of optional memory optimization techniques
* Trampoline calls
	* rather than recursive calls, return function and execute it

#### Lists
* Functor? -> value that you can map across
* `map` uses same transformation from source to destination
* `filter`: 
	* inclusion operation. if condition is true, then include it.
* `reduce`: combining operation
	* use reduceRight to implement compose() and use reduce to implement pipe()

#### Transducing
* Is combination of reducers
* transducer -> shapes mappers and filters into reducers
* into -> supplies default combinator
* pass identity function if you just want to do `filter` and `map`


```js
list
	.reduce(transducer(sum),0)
```

#### Data Structure Operations

==highlight==

`blah`



```sequence
Alice->Bob: Hello
Note right of Bob: Bob thinks
Bob-->Alice: I am good

```








#### MONAD: FP Data Structure
* DS are about behaviour they create around their values
* `Just` -> wrapper around single value
* `Category Theory`?

#### Async
* `Lazy Array` ~== Observable

#### FP Libraries
* Lodash/FP
* getify/fpo -> uses named argument method style


#### Recap
* Functions(no side effects, point-free)
* Closure
* Composition
* Immutability
* Recursion
* Lists & Data Structures
* Async (observables)


###Questions
1) how do you force garbage collection?
