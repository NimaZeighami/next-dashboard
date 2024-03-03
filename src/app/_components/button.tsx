export const PrimaryButton =
  'bg-primary text-white hover:bg-[#161F31] focus:bg-primary-opacity-90 focus:shadow-primary-focus whitespace-nowrap';

export const SecondaryButton =
  'bg-white text-[#464F60] shadow-secondary hover:text-[#171C26] focus:!shadow-mid-blue-focus duration-100 whitespace-nowrap';

export const DisabledPrimaryButton = 'bg-primary-opacity-40 text-[#EBEDEF]';

export const DisabledSecondaryButton =
  'bg-[#F7F9FC] text-[#868FA0] shadow-disable whitespace-nowrap';

export default function Button(props: any) {
  return( 
    <button
    className={`${props.overallStyle} rounded-md px-3 py-1 text-sm flex items-center gap-2`}
    // onClick={props.onClick}
    disabled={!props.active}
  >
    {/* {icon ? (
      <FontAwesomeIcon className={`${iconStyle}`} icon={icon} size="xs" />
    ) : null} */}
    {props.title}
  </button>
  )
}