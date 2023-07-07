import React from "react";
import { Form,FormGroup } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
    return(
        <Form unstackable>
        <FormGroup>
          <Form.Input icon='tags' width={12} label='Description' placeholder='new shinny thing'/>
          <Form.Input width={4} label='value' placeholder='100.00' icon='dollar' iconPosition='left'/>
        </FormGroup>
        <ButtonSaveOrCancel />
      </Form>
    )
}
export default NewEntryForm;