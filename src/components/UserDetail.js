import React from "react";

export class UserDetail extends React.Component {

    displayChildKeys = (data) => {
        let dataKeys = !data ? [] : Object.keys(data);

        return dataKeys.map(key => {

            if (typeof data[key] == "object") {
                return this.displayChildKeys(data[key]);
            } else {
                return (
                    <div >
                        <b>{key}-</b> <span>{(data[key])}</span>
                    </div>
                )
            }

        })
    }

    render() {
        return (
            <div>
                <div className="sidebar">
                    Name : {this.props.showUserDetailOf.name}
                    <br />
                    UserName : {this.props.showUserDetailOf.username}
                    <br />
                    Email: {this.props.showUserDetailOf.email}
                    <br />
                    Address: <div className="address-wrapper">
                        {this.displayChildKeys(this.props.showUserDetailOf.address)}
                    </div>
                    <br />
                    Phone: {this.props.showUserDetailOf.phone}
                    <br />
                    Website: {this.props.showUserDetailOf.website}
                    <br />
                    Company:<div className="company-wrapper">
                        {this.displayChildKeys(this.props.showUserDetailOf.company)}
                    </div>
                </div>
            </div>
        )
    }
}