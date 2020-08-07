import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Quote from "components/Typography/Quote.js";


import image from "assets/img/bg10.jpg";


import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function Testemonials() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                        <Card carousel>
                            <Carousel {...settings}>
                                <div>
                                    <img src={image} alt="First slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <div className={classes.typo}>
                                            <div className={classes.note}>Quote</div>
                                            <Quote
                                                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                author=" Kanye West, Musician"
                                            />
                                        </div>
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            John Smith - Yale University
                    </h4>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={image}
                                        alt="Second slide"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            Kate Arrow - HKU
                    </h4>
                                    </div>
                                </div>
                                <div>
                                    <img src={image} alt="Third slide" className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <FormatQuoteIcon className="slick-icons" />
                                            Bob Young - NTU
                    </h4>
                                    </div>
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
