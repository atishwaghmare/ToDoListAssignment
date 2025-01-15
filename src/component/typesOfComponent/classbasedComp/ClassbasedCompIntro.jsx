import { Component } from "react";
import ClassBasedCompEx1 from "./ClassBasedCompEx1";
import IncreaseCount from "./IncreaseCount";

export  default class ClassbasedCompIntro extends Component
{
    render()
    {
        return(
            <div>
               {/* <ClassBasedCompEx1/> */}
                <IncreaseCount/>
            </div>
        )
    }
}