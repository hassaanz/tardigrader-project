import React, { Component } from 'react';
// import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./tardigraderLogo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p className={styles.humility}>
              Created and maintained by <a href="http://www.tardigrader.com" >Team Tardigrader</a>.
            </p>
          </div>
        </div>

        <div className="container">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu. Elementum nisi quis eleifend quam adipiscing. Non enim praesent elementum facilisis leo vel. Ut porttitor leo a diam sollicitudin tempor id eu. Arcu vitae elementum curabitur vitae nunc sed. Nisl vel pretium lectus quam id leo. Nunc sed id semper risus in hendrerit gravida rutrum. Quis blandit turpis cursus in. Enim tortor at auctor urna nunc id cursus metus aliquam. Risus ultricies tristique nulla aliquet enim tortor at auctor. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. In fermentum et sollicitudin ac orci phasellus egestas. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Ut eu sem integer vitae justo eget. Tortor aliquam nulla facilisi cras fermentum odio eu. Elementum tempus egestas sed sed risus pretium quam vulputate. Dui id ornare arcu odio. Viverra ipsum nunc aliquet bibendum enim.
          </p>
          <p>
            Blandit aliquam etiam erat velit scelerisque in. Non consectetur a erat nam. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Feugiat vivamus at augue eget arcu dictum varius duis. Fusce ut placerat orci nulla pellentesque dignissim. Non tellus orci ac auctor augue mauris augue. Ornare aenean euismod elementum nisi. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Amet facilisis magna etiam tempor. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Arcu cursus vitae congue mauris rhoncus aenean. Pellentesque habitant morbi tristique senectus et. Ornare massa eget egestas purus viverra accumsan in. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.
          </p>
          <p>
            Leo vel orci porta non pulvinar neque laoreet. Sed turpis tincidunt id aliquet risus. Pellentesque sit amet porttitor eget dolor morbi. Amet porttitor eget dolor morbi non arcu risus quis varius. Quam quisque id diam vel quam. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Etiam erat velit scelerisque in. At auctor urna nunc id. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Quam pellentesque nec nam aliquam sem. Aenean et tortor at risus. In hac habitasse platea dictumst quisque. Gravida dictum fusce ut placerat orci nulla pellentesque.
          </p>
          <p>
            Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Scelerisque viverra mauris in aliquam sem fringilla. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Pretium aenean pharetra magna ac. Enim nec dui nunc mattis. Orci sagittis eu volutpat odio facilisis. Malesuada fames ac turpis egestas sed tempus urna et. Id eu nisl nunc mi ipsum faucibus. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Hac habitasse platea dictumst vestibulum rhoncus est. Arcu non odio euismod lacinia at quis.
          </p>
          <p>
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Velit euismod in pellentesque massa placerat duis ultricies lacus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Vitae congue eu consequat ac felis donec et odio pellentesque. Massa sed elementum tempus egestas sed sed risus pretium. Egestas diam in arcu cursus euismod quis. A scelerisque purus semper eget duis at tellus. Aliquet nibh praesent tristique magna sit amet purus. Aliquet sagittis id consectetur purus ut. Sed libero enim sed faucibus turpis in eu. Ipsum nunc aliquet bibendum enim. Massa ultricies mi quis hendrerit dolor magna. Facilisis leo vel fringilla est. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Dignissim convallis aenean et tortor at risus. Et sollicitudin ac orci phasellus.
          </p>
        </div>
      </div>
    );
  }
}
