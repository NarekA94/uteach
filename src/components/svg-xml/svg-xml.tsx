import React, {memo} from 'react';
import {SvgXml as DefSvg} from 'react-native-svg';
import * as Xmls from '../../assets/svgxml/svgxml';
import type {SvgXmlType} from '../../assets/svgxml/types';
export type {SvgXmlType} from '../../assets/svgxml/types';

interface localProps {
  xml: SvgXmlType;
}

export const SvgXml = memo((props: localProps) => {
  const xm: any = Xmls;
  const image: SvgXmlType = xm[props.xml];
  return <DefSvg xml={image || null} />;
});
