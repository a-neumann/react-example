import * as React from "react";
import { inject } from 'mobx-react';

class InjectTest extends React.Component<{ a?: number, b?: number }> {

    render() {

        return this.props.a + this.props.b;
    }
}

export default inject("a", "b")(InjectTest);