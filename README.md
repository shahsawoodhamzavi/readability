# Readability
Readability is a web-based program implemented in **[html](https://developer.mozilla.org/en-US/docs/Web/HTML), [css](https://developer.mozilla.org/en-US/docs/Web/CSS), [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** that computes the approximate grade level needed to comprehend some text.

## Reading Levels
According to [Scholastic](https://www.scholastic.com/teachers/teaching-tools/collections/guided-reading-book-lists-for-every-level.html), E.B. White’s “Charlotte’s Web” is between a second and fourth grade reading level, and Lois Lowry’s “The Giver” is between an eighth grade reading level and a twelfth grade reading level. What does it mean, though, for a book to be at a “fourth grade reading level”?

Well, in many cases, a human expert might read a book and make a decision on the grade for which they think the book is most appropriate. But you could also imagine an algorithm attempting to figure out what the reading level of a text is.

So what sorts of traits are characteristic of higher reading levels? Well, longer words probably correlate with higher reading levels. Likewise, longer sentences probably correlate with higher reading levels, too. A number of “readability tests” have been developed over the years, to give a formulaic process for computing the reading level of a text.

One such readability test is the Coleman-Liau index. The Coleman-Liau index of a text is designed to output what (U.S.) grade level is needed to understand the text. The formula is:

```
index = 0.0588 * L - 0.296 * S - 15.8
```

Here, L is the average number of letters per 100 words in the text, and S is the average number of sentences per 100 words in the text.

## Usage
For example, if user types in a line from Dr. Seuss into our Textbox:
```
Congratulations! Today is your day. You're off to Great Places! You're off and away!
Grade 3
```

## Demonstration
![](./images/1.png)
