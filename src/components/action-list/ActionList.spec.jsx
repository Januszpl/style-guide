import React from 'react';
import ActionList, {DIRECTION} from './ActionList';
import ActionListHole from './ActionListHole';
import {shallow} from 'enzyme';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'buttons/ButtonPrimary';

describe('ActionList', () => {
  test('render', () => {
    const actionList = shallow(
      <ActionList>
        <ActionListHole>
          <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.alt} small>
            accept
          </ButtonSecondary>
        </ActionListHole>
        <ActionListHole>
          <ButtonPrimary buttonType={BUTTON_PRIMARY_TYPE.dark_inverse}>
            Later
          </ButtonPrimary>
        </ActionListHole>
      </ActionList>
    );

    expect(actionList.hasClass('sg-actions-list')).toEqual(true);
  });

  test('to-right', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.TO_RIGHT}></ActionList>
    );

    expect(actionList.hasClass('sg-actions-list--to-right')).toEqual(true);
  });

  test('to-top', () => {
    const actionList = shallow(
      <ActionList toTop></ActionList>
    );

    expect(actionList.hasClass('sg-actions-list--to-top')).toEqual(true);
  });

  test('centered', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.CENTERED}></ActionList>
    );

    expect(actionList.hasClass('sg-actions-list--centered')).toEqual(true);
  });

  test('space-between', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.SPACE_BETWEEN}></ActionList>
    );

    expect(actionList.hasClass('sg-actions-list--space-between')).toEqual(true);
  });

  test('no-wrap', () => {
    const actionList = shallow(
      <ActionList noWrap></ActionList>
    );

    expect(actionList.hasClass('sg-actions-list--no-wrap')).toEqual(true);
  });
});

