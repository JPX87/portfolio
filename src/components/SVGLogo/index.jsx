function SVGLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
      {/*<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->*/}
      <path fill={props.fill} d={props.d} />
    </svg>
  )
}

export default SVGLogo
