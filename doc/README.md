* Best code is the one that is less to read

### Functions
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
* 

###Questions
1) how do you force garbage collection?
