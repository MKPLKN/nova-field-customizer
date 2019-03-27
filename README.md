# Nova Field Customizer
A Laravel Nova tool for customizing forms

### Install
`composer require bhnow/nova-field-customizer`

### Load @media classes (optional)
Add ` Bhnow\NovaFieldCustomizer\NovaFieldCustomizer ` inside `NovaServiceProvider.php`

```php
public function tools()
{
    return [
        new Bhnow\NovaFieldCustomizer\NovaFieldCustomizer(),
    ];
}
```
If you do this, you can use make the forms/fields reponsive by usign TailwindCSS screen classes.
For example: `w-full md:w-1/3` - [Read more about TailwindCSS screen classes](https://tailwindcss.com/docs/responsive-design/#app)
### Available methods

#### Add classes to specific part of the field/form row
First parameter is a string, which represents all the class names you want to add.
Second paramenter is optional and if you set it true, it will clear all the default classes before
it set your custom classes.

`->formRowClasses($string, $clear = false)`

`->wrapperClasses($string, $clear = false)`

`->wrapperLabelClasses($string, $clear = false)`

`->wrapperFieldClasses($string, $clear = false)`

`->labelClasses($string, $clear = false)`

`->fieldClasses($string, $clear = false)`


#### Helper functions
`->stack()` <- Stacks label & field (label top, field bottom)>

`->half()` <- Width 1/2>

`->third()` <- Width 1/3>

`->forth()` <- Width 1/4>

`->fifth()` <- Width 1/5>

`->clear()` <- Clears all classes>
