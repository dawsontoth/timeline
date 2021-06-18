export interface IItem {
  message: string;
  atMinutes?: number;
  afterMinutes?: number;

  completed?: boolean;
  completedAt?: number;

  tick?: () => void;
  relativeTo?: IItem;
}

// TODO: Observe Livestream Studio through remote API
// TODO: Control Livestream Studio through remote API

let hitGoLive: IItem;
let hitOutro: IItem;

export const items: IItem[] = [
  // TODO: Add pictures of actions.
  // TODO: Load all this from a series of files so it's easy to maintain.
  // Without minutes, these happen whenever.
  { message: "Open Livestream Studio." },
  { message: "Double tap <strong>Black</strong> source to output." },
  { message: "Push <strong>GFX 2</strong> and verify the logo is displaying." },
  { message: "Set title for this week in 2 places, and time of next service, then hit <strong>Update</strong> button." },
  { message: "Make sure <strong>Names</strong> tab is ready for whomever is speaking today." },
  // They will anchor future items based on their completion time.
  // Absolute minutes, not relative.
  hitGoLive = { atMinutes: 50, message: "Hit <strong>GO LIVE</strong> button in top left." },
  // Relative minutes, look for prior fixed point.
  { relativeTo: hitGoLive, afterMinutes: 0, message: "Double tap <strong>Intro</strong> source to output." },
  { relativeTo: hitGoLive, afterMinutes: 0, message: "Single tap <strong>Cameras</strong> source to preview." },
  { relativeTo: hitGoLive, afterMinutes: 0, message: "Check that the stream started OK on Vimeo, YT and FB." },
  { relativeTo: hitGoLive, afterMinutes: 5, message: "When countdown begins, double tap <strong>Cameras</strong> to output." },
  { relativeTo: hitGoLive, afterMinutes: 10, message: "Have fun! Mistakes happen, just roll with it." },
  hitOutro = { message: "When dismissed, double tap on <strong>Outro</strong> source to output." },
  // When above isn't completed, our fixed point is undefined, so no countdown should show.
  { relativeTo: hitOutro, afterMinutes: 0, message: "Single tap on <strong>BLACK</strong> source to preview." },
  {
    relativeTo: hitOutro,
    afterMinutes: 0,
    message: "After in-person ends, ensure <strong>Projector</strong> is going out to the building.",
  },
  {
    relativeTo: hitOutro,
    afterMinutes: 10,
    message: "When the timer hits 0, stop streaming by tapping red <strong>STREAMING</strong> button.",
  },
];

items.forEach(item => {
  item.completed = false;
});
