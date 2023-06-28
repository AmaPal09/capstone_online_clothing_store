// form-input.component.jsx

import {
    FormInputLabel, 
    Group, 
    Input, 
} from './form-input.styles.jsx';


//Form input component
const FormInput = ( { label, ...otherProps} ) => {
	return (
		<Group>
			<Input { ...otherProps } />
			{label && (
				<FormInputLabel shrink = {otherProps.value.length}>
                    { label }“
				</FormInputLabel>
            )}
        </Group>
	)
};

export default FormInput;