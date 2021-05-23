import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
        let d = new Date(date);
        return monthNames[d.getMonth()] + " " + (d.getDate()<10?"0"+d.getDate():d.getDate()) + ", " + d.getFullYear();
    }

    renderComments(id, comments) {
        if(comments.length > 0){
            const comment = comments.map((c) => {
                let d = new Date(c.date);
                return (
                <ul className="list-unstyled" key={c.id}>
                    <li>{c.comment}</li>
                    <li>-- {c.author}, {this.formatDate(c.date)}</li>
                </ul>
                );
            });
            return (<div>
                        <h4>Comments</h4>
                        {comment}
                    </div>
                    );
        }
        else {
            return <div></div>;
        }
    }

    render() {
        const dish = this.props.selectedDish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.id, dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default DishDetail;