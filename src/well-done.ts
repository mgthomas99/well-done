import * as randomItem from "random-item";

/**
 * An array of strings whose content is a common congratulation. Each string
 * begins with a capital letter followed by all other characters being
 * lower-case (sentence case). Some strings contain punctuation, but none of
 * them end with conclusive punctuation (i.e., none of the strings end with a
 * full-stop).
 */
export const CONGRATULATIONS = [
    "Beautiful",
    "Congratulations",
    "Excellent",
    "Good going",
    "Good job",
    "Good work",
    "Great",
    "Keep it up",
    "Muy bien",
    "Neat",
    "Nice going",
    "Outstanding",
    "Right on",
    "Super",
    "Terrific",
    "That's it",
    "Way to go",
    "Well done",
    "You've got it"
];

/**
 * Returns a random congratulation from the `CONGRATULATIONS` array.
 *
 * @return  {string}
 *          A random congratulative string.
 */
export function wellDone(): string {
    return randomItem(CONGRATULATIONS);
}
