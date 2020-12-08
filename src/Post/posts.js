import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  ReferenceField,
  EditButton,
} from "react-admin";

//Post
export const Posts = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id"></TextField>
      <ReferenceField source="userId" reference="users">
        <TextField source="name"></TextField>
      </ReferenceField>
      <TextField source="title"></TextField>
      <EditButton />
    </Datagrid>
  </List>
);
