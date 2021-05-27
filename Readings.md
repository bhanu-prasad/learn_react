# Lifecycle of React Components
![life cycle](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

**Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle.**

## Lifecycle Methods:

1. Initialization
2. Mounting
3. Updating
4. Unmounting


### Initialization

**This is the phase in which the component is going to start its journey by setting up the state and the props.**

```
class Initialize extends React.Component {
    constructor(props)
    {
    // Calling the constructor of
    // Parent Class React.Component
    super(props);
    // initialization process
    this.state = {
       date : new Date(),
       clickedStatus: false
     };
}
```