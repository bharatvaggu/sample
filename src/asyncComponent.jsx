import React from 'react';
export default (loader, collection) => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.Component = null;
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillMount() {
      /* Added by Pankaj Karpe for redirecting to login page when jwt_token is not set or expires */
      if (document.cookie.indexOf('jwt_token') == -1 && window.location.host == "dev.247software.com") {
        location.reload(false);
      }
      /* Ends Here */
      $('#page-loading').show();
      if (!this.state.Component) {
        loader().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
         $('#page-loading').hide();
        });
      }else{
       $('#page-loading').hide();
      }
    }

    render() {
      if (this.state.Component) {
        return (
          <this.state.Component { ...this.props } { ...collection } />
        )
      }

      return null;
    }
  }
);