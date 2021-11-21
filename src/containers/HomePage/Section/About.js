import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class About extends Component {


    render() {



        return (
            <div className=" section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/1sHF_Fa9-0E"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện cung cấp nền tảng công nghệ giúp bệnh nhân dễ dàng lựa chọn dịch vụ y tế từ mạng lưới bác sĩ chuyên khoa giỏi, phòng khám/ bệnh viện uy tín với thông tin đã xác thực và đặt lịch nhanh chóng.
                        </p>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
