### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Ans.**
**getElementById:** is used to retrieve a specific HTML element from a web page by its unique id attribute and can access **only one element** at a time. It is generally the **fastest** method for selecting a single element.

**getElementsByClassName:** is used to select HTML elements based on their class name. This method returns a **live HTMLCollection**, which is an **array-like object**. **"Live"** signifies that the collection automatically updates if elements matching the class are added or removed from the DOM after the initial retrieval.

**querySelector:** is used to select the **first element** within a document (or a specific element) that matches a specified CSS selector or a group of selectors. It returns the first matching Element object, or null if no element matches the selector.

**querySelectorAll:** is used to return a collection of an element's child elements that match a specified CSS selector(s), as a static **NodeList object**. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers.

2. How do you **create and insert a new element into the DOM**?

**Ans.**
**createElement** — create a new element. **e.g.** const newEle = document.createElement("p");
**createTextNode** — create any needed content. **e.g.** newEle..innerText = "I am a new Element.";
**appendChild** — attach the new text node to the element. **e.g.** getElementById("main-container").appendChild(newEle);

3. What is **Event Bubbling** and how does it work?

**Ans.**
Event bubbling is a phase in the event propagation process where an event starts from the target element (the element that triggered the event) and bubbles up through the DOM tree to its ancestors (parent elements).

4. What is **Event Delegation** in JavaScript? Why is it useful?

**Ans.**
Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. Event delegation is a technique where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

**Efficiency:** Event delegation reduces the number of event listeners, improving memory usage and performance, especially when dealing with a large number of elements.

**Dynamic elements:** It works seamlessly with dynamically added or removed child elements, as the common ancestor continues to listen for events on them.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Ans.**
preventDefault() is used to prevent the default action that belongs to the event, such as **preventing a form** from submitting.

event. stopPropagation() is used **to stop the event from bubbling up to parent elements**, preventing any parent event handlers from being executed.

preventDefault() deals with the default action of an element, while stopPropagation() deals with the flow of an event through the DOM.
