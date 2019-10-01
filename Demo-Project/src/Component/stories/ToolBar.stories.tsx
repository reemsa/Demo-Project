import React from "react";
import { storiesOf } from "@storybook/react";
import ToolBar from "../../ToolBar";
import ArticleCard from "../ArticleCard";
storiesOf("ToolBar", module).add("ToolBar", () => <ToolBar propsdata={<ArticleCard></ArticleCard>}></ToolBar>);
