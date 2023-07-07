import React from "react";
import { ButtonGroup,Button, ButtonOr} from "semantic-ui-react";

function ButtonSaveOrCancel() {
    return(
        <ButtonGroup style={{marginTop:20}}>
          <Button>Cancel</Button>
          <ButtonOr/>
          <Button primary>OK</Button>
        </ButtonGroup>
    )
}

export default ButtonSaveOrCancel;