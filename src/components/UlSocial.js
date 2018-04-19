import React, { Component } from 'react';

class UlSocial extends Component {
   data = [
    {className: 'ion-social-github', link: 'https://github.com/mafazans'},
    {className: 'ion-social-linkedin', link: 'https://www.linkedin.com/in/arif-mafazan-simohartono-54759191/'},
    {className: 'ion-social-whatsapp', link: 'https://api.whatsapp.com/send?phone=6285899992418'},
    {className: 'ion-social-twitter', link: 'https://twitter.com/arifmafazan'},
    {className: 'ion-social-googleplus', link: 'https://plus.google.com/u/0/100724928968923487575'}
  ]

  render () {
    const {className} = this.props;
  return (
    <ul className={className}>
        {
          this.data.map(( { className, link }, index) => {
            return <li key={index}><a href={link}><i className={className}></i></a></li>
          })
        }
    </ul>
  )
}
}

export default UlSocial;