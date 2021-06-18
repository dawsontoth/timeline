export interface IItem {
  message: string;
  afterMinutes?: number;
}

export const items: IItem[] = [
  // TODO: Add pictures of actions.
  // TODO: Load all this from a series of files so it's easy to maintain.
  { message: "House Lights Off on Wall Control" },
  { message: "Turn On Lighting System in Rack" },
  { message: "Turn on Projector" },
  { message: "Turn on Soundboards" },
  { message: "Open ProPresenter" },
  { message: "Open Livestream Studio" },
  { message: "Set title for this week, and time to 9am, then hit update" },
  { message: "In Livestream Studio: \"Black\" should be Output" },
  { message: "Push GFX 2 (Logo)" },
  { message: "Make sure \"Names\" tab is ready for whomever is speaking today" },
  { afterMinutes: 0, message: "Hit \"GO LIVE\" button in top left" },
  { afterMinutes: 0, message: "Output \"Intro\" source." },
  { afterMinutes: 0, message: "Preview \"Cameras\" source." },
  { afterMinutes: 0, message: "Check that the stream started OK on Vimeo, YT and FB." },
  { afterMinutes: 5, message: "When countdown begins, output \"Cameras\"" },
  { afterMinutes: 10, message: "Have fun! Mistakes happen, just roll with it." },
  { message: "When dismissed, double tap on \"Outro\" source to output" },
  { afterMinutes: 0, message: "Single tap on \"Black\" source to preview" },
  { afterMinutes: 0, message: "After in-person ends, ensure \"Projector\" is going out to the lobby" },
  { afterMinutes: 10, message: "When the timer hits 0, stop streaming by tapping red \"STREAMING\" button" },
];
