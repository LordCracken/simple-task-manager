import { FC } from 'react';

import { IWrapper } from '../../interfaces';
import classes from './Section.module.css';

const Section: FC<IWrapper> = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
