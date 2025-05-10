import { AddOn } from './AddOn';
import {
  useAppDispatch,
  useAppSelector
} from '../store/hooks';
import { updateAddOn } from '../store/slices/addOnsSlice';

export function AddOns() {
  const dispatch = useAppDispatch();
  const { onlineService, largeStorage, customizableProfile } = useAppSelector(
    state => state.addOns.data
  );

  const addOnHandler = (status: boolean, title: string) => {
    dispatch(updateAddOn({ status, title }));
  };

  return (
    <div className="flex flex-col gap-2 lg:gap-2 xl:gap-4">
      <AddOn
        title={onlineService.addOnTitle}
        text={onlineService.addOnText}
        price={onlineService.addOnPrice}
        status={onlineService.addOnStatus}
        clickHandler={addOnHandler}
      />
      <AddOn
        title={largeStorage.addOnTitle}
        text={largeStorage.addOnText}
        price={largeStorage.addOnPrice}
        status={largeStorage.addOnStatus}
        clickHandler={addOnHandler}
      />
      <AddOn
        title={customizableProfile.addOnTitle}
        text={customizableProfile.addOnText}
        price={customizableProfile.addOnPrice}
        status={customizableProfile.addOnStatus}
        clickHandler={addOnHandler}
      />
    </div>
  );
}