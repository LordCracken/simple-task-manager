import { FC } from 'react';

import { ISection } from '../../interfaces';
import classes from './Section.module.css';

const Section: FC<ISection> = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
