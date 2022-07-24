# InputWith

A simple React Input component that accepts label and shows error onBlur if any.

## How to use

Run

- `npm install inputwith`

```
import InputWith from 'inputwith'
...
```

You can also import the type definitions if you're using TypeScript like so:

```
import InputWith, { fieldProps} from 'inputwith'
...
```

## Available props

```

label: string (optional)
showError: boolean
errMessage?: string (optional)
inputProps?: React.InputHTMLAttributes<HTMLInputElement>


```

To customise this component, pass in a class name to inputprops `className` prop and style that class name in your custom CSS.

```

// your-component.js
import InputWith from 'inputwith'

...
 <InputWith
          label='Please Type "Test"'
          showError={Test !== 'Test'}
          errMessage="Please Check your 'Test' spelling"
          inputProps={{
            value: Test,
            name:'Test',
            onChange: (e) => setTest(e.target.value),
            placeholder: 'Test',
            className:'dummy'
          }}
/>
...

// your-component.css
.dummy {
  color: white;
  background-color: purple;
}

```

**This component was built for testing.**
