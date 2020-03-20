# Mini Pokedex

## Introduction
Mini Pokedex is an interactive real life version of the famous little gadget known as the Pokedex from Nintendo's 'Pokemon' video game series. Visually designed to mimic the original Pokedex from the 1997 television series, explore information about your favorite Pokemon and watch them come to life through animated images on screen.

<kbd>
<img src="https://github.com/karleee/mini-pokedex/blob/master/README_images/mini-pokedex_main1.png" alt="Homepage" width="900px"     border="1">
</kbd>

<br>
<br>
<br>

<kbd>
<img src="https://github.com/karleee/mini-pokedex/blob/master/README_images/mini-pokedex_main2.png" alt="Homepage" width="900px" border="1">
</kbd>


## How It Works
To see the most up to date version, please visit [the homepage](https://nookbnb.herokuapp.com/#/).

## Technologies Used
* Database – Postgres
* Libraries – React, Redux
* Server Environment – Ruby on Rails


## Feature Spotlight
### Feature # 1

feature text

<kbd>
<img src="https://github.com/karleee/nookbnb/blob/master/README_images/calendar_widget_main.png" alt="Homepage" width="900px" border="1">
</kbd>

<br>
<br>

**Challenges**
> Challenge # 1

challenge #1 text

<br>

> Challenge # 2

challenge # 2 text

<br>

> Challenge # 3

challenge # 3 text

<br>
<br>

**Solutions**
> Building from Scratch: Solution

For the first trial, I attempted to use the built in React datepicker, which uses hooks rather than functional components. Although this achieved the functionality that I wanted, there were some limitations. Styling for the built in widget seemed to be embedded within the widget itself; and rather than using traditional CSS or SCSS, it utilized props to manage custom style needs. Due to the time restraint and lack of familiarity with the code produced by this hook, I decided that it would take less time and increase efficiency if I created a calendar widget from scratch. Not only did this save time on the styling process, but it also increased my understanding and knowledge of how to build a custom calendar component.

<br>

> Split Years: Solution

This was a tricky issue, but ultimately, my solution involved storing separate slices of local state in the datepicker component to keep track of the date that the user chose for check-in and the date that they chose for checkout.

And to determine which text field to autofill, a clever solution that I thought of was to use a `clicks` slice of state to determine whether or not the user was choosing their check-in or checkout date. Inside of the click handler for the dates on the calendar, I was able to determine if it was their first or second click and then update the correct slice of state to trigger a re-render of the text box inputs.

``` javascript
  // Handles auto fill in dates for check-in and checkout
  handleDateClick(month, day, yr) {
    let newClicks = this.state.clicks + 1;
    let realMonthNum = month + 1;

    this.setState({ clicks: newClicks });
 
    if (newClicks % 2 !== 0) {
      this.setState({ selectedStartMonth: realMonthNum });
      this.setState({ selectedStartDay: day });
      this.setState({ selectedStartYr: yr });
      this.resetEndDate();
    } else {
      this.setState({ selectedEndMonth: realMonthNum });
      this.setState({ selectedEndDay: day });
      this.setState({ selectedEndYr: yr });
    }
  }
```
<br>

> Guests Amount: Solution

To create the guests amount dropdown menu, I created a HTML element that rendered the entirety of the dropdown menu; however, to make it appear as though it only activated when the user clicked on the guests options input bar, I initially set the opacity to 0. Once the user clicks on the input bar, a class is added to this HTML element and using styling, I changed the opacity to 1 for this specific class. This created the toggling effect that I was trying to accomplish with this piece of the calendar widget. And to create the editing buttons (adding and subtracting) in the dropdown menu I used icon tags that dynamically changed content depending on whether or not the maximum amount of guests had been reached.

<kbd>
<img src="https://github.com/karleee/airbnb_clone/blob/master/README_images/calendar_widget_guests.png" alt="Homepage" width="300px" border="1">
</kbd>

And to keep my code DRY, I managed to create a single adding and subtracting click event for every category of guests in the dropdown menu. These generic functions take in a string that indicates which type of guest they need to change the state for; and it also provides checks to see if the maximum guest amount has been reached. Because there can only be a maximum of four guests, the maximum amount for any of these categories can only be four. And if the code execution has reached the inside of the initial `if` statement, then we can safely assume that the total guest count has not reached the maximum and additions can still be made. A similar process applies to the subtraction function as well, except of course that the changes to the state are decreasing the total amount and the bounding range is checking to see if the guest amount is already at 0 (in that case, we cannot subtract any more). To account for how Airbnb handles the amount of infants in a rental, I excluded the infant guests from my total count.

``` javascript
// Handles guests adding click
  handleGuestsAddingClick(guestType) {
    let totalGuests = this.state.adultGuests + this.state.childrenGuests;
    let newTotalGuests;
    let guestCount;

    if (guestType === 'adult') {
      guestCount = this.state.adultGuests;
    } else if (guestType === 'children') {
      guestCount = this.state.childrenGuests;
    } else {
      let newInfantGuests = this.state.infantGuests + 1;
      this.setState({ infantGuests: newInfantGuests });
      return;
    }

    if (totalGuests < 4) {
      newTotalGuests = totalGuests + 1;
      this.setState({ totalGuests: newTotalGuests });

      if (guestType === 'adult' && guestCount < 4) {
        let newAdultGuests = guestCount + 1;
        this.setState({ adultGuests: newAdultGuests });
      } else if (guestType === 'children' && guestCount < 4) {
        let newChildrenGuests = guestCount + 1;
        this.setState({ childrenGuests: newChildrenGuests });
      } 
    }
  }
```

------

### Feature #2



**Challenges**
> Challenge #1

> Challenge #2

> Challenge #3

**Solutions**

> Solution #1


  
> Solution #2


> Solution #3



## Future Updates


| Version Number        | Updates           | 
| :------------- |:------------- |
| Version 1.1      | Booking Form |  
