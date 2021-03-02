import { Checkbox,  List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 480,
      backgroundColor: theme.palette.background.paper,
      justifyContent: 'center',
      alignContent: 'center',
    },
   
    listItem: {
      border: '1px solid #1e2f2f',
      borderRadius: 3,
      display: 'flex',
      color: 'black',
      fontSize : '2em',
      height: 48,
      padding: '0 30px',
      marginTop : '10px',
      justifyContent: '10px',
      textTransform: 'capitalize',
    },
    listItemText : {
      fontSize : '3em',
    }

  }),
);

export interface TodoListInterface {
  subject: string;
  status: boolean;
}
export interface TodoListAttributes {
  todoList: TodoListInterface[];
}


export default function ItemList(attr: TodoListAttributes) {
  const { todoList } = attr;
  const classes = useStyles();
 

  if (todoList.length < 1) {
    return <div></div>;
  } else {
    return(
      <div>
      <List dense className={classes.root} >
        {todoList.map((row,index) =>{
          return(
          <ListItem key={index} className={classes.listItem} >
            <ListItemText  className={classes.listItemText} primary={row.subject}/>
            
          </ListItem>
          ) 
        })
      }
      
      </List>
      </div>
    )
  }

}
