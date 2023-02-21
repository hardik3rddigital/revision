import React from "react";
import { UserContextUseContext, MultipleContextUseContext } from "./UseContext";

function UseContextB() {
  return (
    <>
      <UserContextUseContext.Consumer>
        {(userData) => {
          return (
            <>
              <MultipleContextUseContext.Consumer>
                {(multipleData) => {
                  return (
                    <>
                      <h5 className="list-group-item">
                        My Name is : <b className="text-decoration-underline fst-italic">{userData.name}</b> & My Componet Name
                        is : <b>{userData.component}</b>
                      </h5>
                      <h5 className="list-group-item">
                        My Nickname is : <b className="text-decoration-underline">{multipleData.nickname}</b> & My Componet description
                        is : <b>{multipleData.description}</b>
                      </h5>
                    </>
                  );
                }}
              </MultipleContextUseContext.Consumer>
            </>
          );
        }}
      </UserContextUseContext.Consumer>
    </>
  );
}

export default UseContextB;
