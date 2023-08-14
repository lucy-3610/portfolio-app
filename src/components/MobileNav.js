import React from 'react';
import ResponsiveModal from "react-responsive-modal";
import { Link } from 'react-router-dom';

const styles = {
    modal: {
        backgroundColor: "red",
        boxShadow: "none",
        display: "flex",
        overflow: "none",
        width: "100%",
        padding: "0",
        margin: "0",
        height: "100%",
        minWidth: "100%",
        justifyContent: "center"
    },
    overlay: {
        backgroundColor: "purple",
        padding: 0
    },
    closeIcon: {
        fill: "#fff"
    }
};

export default class MobileNav extends React.Component {
    render() {
        const { setModalVisible, modalVisible } = this.props;
        return (
            <div className="mobile-nav">
                <ResponsiveModal
                    open={modalVisible}
                    onClose={() => setModalVisible(false)}
                    styles={styles}
                    animationDuration={1000}
                    focusTrapped={true}
                    closeIconSize={40}
                    showCloseIcon={true}
                >
                    &#9776;
                    <Link to="/portfolio">
                        PORTFOLIO
                    </Link>
                    <Link to="/about">
                        ABOUT
                    </Link>
                    <Link to="/contact">
                        CONTACT
                    </Link>
                </ResponsiveModal>

            </div>
        );

    }
}