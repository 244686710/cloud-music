import React, {forwardRef, useState, useRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components';

const ScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Scroll = forwardRef((props, ref) => {
    const [bScroll, setBScroll] = useState();

    const scrollContainer = useRef();
})