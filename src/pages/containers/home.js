import React, { Component } from 'react'
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/categories";
import Related from "../components/related";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";

import { connect } from 'react-redux'

class Home extends Component {
    state = {
        modalVisible: false,

    }
    handleOpenModal = media => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    {/*
                        <Related />
                    */}
                    <Categories
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible &&

                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

const mapStateToProps = (state, props) => (
    {
        categories: state.data.categories,
        search: state.search
    }
)

export default connect(mapStateToProps)(Home)