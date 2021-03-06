import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Sticker, {TYPE} from '../Sticker';

const Stickers = () => (
  <DocsBlock info="Default">
    <ContrastBox>
      {Object.values(TYPE).map(type =>
        <Sticker key={type} type={type} />
      )}
    </ContrastBox>
  </DocsBlock>
);

export default Stickers;
