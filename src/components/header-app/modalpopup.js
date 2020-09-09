



import React from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const noop = () => {}

function ModalPopup({
    isOpen= false,
    title = 'title',
    content = 'content',
    onClose = noop,
    onSucess = noop,
}) {
    
  return (
    <div>
    <Dialog hasClose
        open={isOpen}
        onClose={onClose}
     classes={{
         paper: "widthset test2"
     }}
      >
        <DialogTitle  >{title}</DialogTitle>
        <DialogContent>
         {content}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={onClose} 
          color="primary">
            Cancel
          </Button>
          <Button onClick={onSucess} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
    
  
  );
}

export default ModalPopup;
