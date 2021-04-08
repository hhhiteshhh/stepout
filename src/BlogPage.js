import React, { useEffect, useRef, useState } from "react";
import "./BlogPage.css";
import comfort from "./images/comfort.jpg";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CarouselPage1 from "./slideFeatureBlog";
import CarouselPage2 from "./slideFeatureblog2";
import pic1 from "./images/blog1.jpeg";
import pic3 from "./images/baby.jpg";
import pic4 from "./images/risk.png";

function BlogPage() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [scroll, setScroll] = useState("body");
  const [maxWidth, setMaxWidth] = useState("md");
  const [isTruncated1, setIsTruncated1] = useState(true);
  const [isTruncated2, setIsTruncated2] = useState(true);
  const [isTruncated3, setIsTruncated3] = useState(true);
  const [isTruncated4, setIsTruncated4] = useState(true);

  const toggleIsTruncated1 = () => {
    setIsTruncated1(!isTruncated1);
  };
  const toggleIsTruncated2 = () => {
    setIsTruncated2(!isTruncated2);
  };
  const toggleIsTruncated3 = () => {
    setIsTruncated3(!isTruncated3);
  };
  const toggleIsTruncated4 = () => {
    setIsTruncated4(!isTruncated4);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClickOpen1 = (scrollType) => () => {
    setOpen1(true);
    setScroll(scrollType);
  };
  const handleClickOpen2 = (scrollType) => () => {
    setOpen2(true);
    setScroll(scrollType);
  };
  const handleClickOpen3 = (scrollType) => () => {
    setOpen3(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open || open1 || open2) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open, open1, open2, open3]);

  return (
    <div className="blogpage">
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <strong>
            HOW TO EXPAND YOUR COMFORT ZONE TO ACHIEVE YOUR GOALS.
          </strong>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              <strong>
                {" "}
                <h2>
                  What is a Comfort Zone?
                  <br />
                  <br />
                </h2>
              </strong>
              A comfort zone is something you carry with you as you move through
              life. This comfort zone is very much like an invisible bubble of
              sorts that surrounds your psyche. And as you go about your day and
              encounter different circumstances, this bubble constantly expands
              and constricts depending on your situation. In other words, as you
              confront a situation your psyche is either free to do more in that
              particular situation, or it is in some ways constricted and
              therefore cannot expand to its full potential. And when your
              comfort zone cannot expand, your psyche is forced to do less than
              it is capable of doing.
              <br />
              <br />
              <span className="text__muted">
                <i>
                  Ask yourself:
                  <br />
                  <br /> How do I tend to carry my comfort zone with me
                  throughout the day?
                  <br />
                  <br /> How do I carry it physically? <br />
                  <br />
                  How do I carry it emotionally?
                  <br />
                  <br />
                </i>
              </span>{" "}
              We all tend to carry our comfort zones both physically and
              emotionally. It’s therefore sometimes physical objects that
              constrict us, while at other times it’s our emotional limitations
              — stemming from limiting beliefs and perspectives — that constrict
              us. Have you ever known people who find comfort and security in
              physical objects? For instance, a stuffed childhood toy or blanket
              can have a great deal of significance and meaning. It might have
              been something that the person turned to for safety as a child.
              And now today that stuffed animal provides that same safety and
              security it did so many years ago. This is an example of how we
              tend to carry our comfort zones with us physically. However, we
              also tend to carry them emotionally.
              <br /> To carry a comfort zone emotionally means resisting certain
              situations that cause some kind of discomfort or fear. This
              discomfort or fear can often stem from a past experience that
              wasn’t particularly pleasant. This experience left a lasting
              impression on your mind, and as a result you are now
              psychologically hardwired to resist that experience.
              <br />
              <br />
              <strong>
                {" "}
                <h2>
                  Expanding Comfort Zone
                  <br />
                  <br />
                </h2>
              </strong>
              The Analogy of a Balloon in a Box
              <br /> Imagine for a moment blowing up a balloon within the
              confines of a small box. The balloon will certainly expand as you
              blow air into it, however, it is constricted by the size of the
              box. It will therefore not expand any further outside the
              dimensions of the box, even though it has the potential to grow
              much bigger than the box itself. The box constricts the balloon in
              the same way that your comfort zone constricts your psyche.
              Likewise, the box prevents the balloon from reaching its full
              potential in a similar way that your comfort zone prevents your
              psyche from reaching its full potential.
              <br /> In order for the balloon to break-free of the box, you will
              need to keep forcing more air into it. With more air, there will
              be more pressure on the inside of the box. Eventually, that
              pressure will be strong enough that the balloon will break the box
              apart — freeing itself to grow to its full potential.
              Alternatively, you could, of course, place the balloon into a
              bigger box. Here it would have more room to grow and expand.
              However, it might still outgrow the box, and you will therefore
              once again have the same problem you had within the smaller box.
              <br />
              <br />
              As the balloon expands the inside surface area of the box starts
              putting pressure on this expansion process. The balloon senses
              this pressure, but of course, it still desires to keep expanding.
              However to keep expanding within this small box is risky. The box
              might very well be too solid and stiff. Therefore to keep
              expanding means to risk bursting. Who knows, there might even be
              spikes on the inside edges of the box. If these spikes are real
              then they’ll certainly pop the balloon.
              <br /> It just seems too risky for the balloon to keep expanding.
              It, of course, wants to expand and grow bigger. To grow bigger
              means that it can successfully escape this box and then have the
              freedom to grow more expansively within a bigger box. However, it
              all just seems too dangerous. There is just too much risk of
              popping. And therefore the balloon deflates to a level where it no
              longer touches the inside surface area of the box. This certainly
              feels better because there is no more danger of popping
              accidentally.
              <br /> This analogy might not provide a comprehensive overview of
              what a comfort zone is, however it certainly does provide some
              context for understanding the effect that a comfort zone (the box)
              has on your psyche (the balloon).
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <strong>Look Beyond Your Comfort Zone.</strong>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              We all carry a comfort zone into every situation. In some
              situations, this comfort zone will be more expansive, and in other
              situations, it will be less expansive. Therefore in some
              situations, it will allow your psyche to expand closer to its full
              potential, while in other instances it will limit the ability of
              our psyche to expand past a certain level. What this therefore
              means is that your ability to do anything in a particular
              situation doesn’t depend on your potential, it’s rather dependent
              on your comfort zone. You might, for instance, have more potential
              than anyone you know, however, you will never live up to that
              potential if your comfort zone is constricting your psyche within
              critical situations.
              <br />
              <br />
              Your comfort zone is, of course, a place where you feel most
              comfortable and secure. It’s a place where there is a great sense
              of certainty and predictability. Everything within the confines of
              this comfort zone is very familiar, and as such things seem easy
              and effortless to the extent that you don’t ever need to do
              anything that causes you any kind of discomfort. There’s just
              nothing new to learn and no new skills to develop. Everything you
              need to live within the confines of this comfort zone you’ve
              already mastered. That’s why life within this comfort zone feels
              so comfortable, warm, secure and cozy. It seems like a perfect
              little world where you can live out the rest of your days in peace
              and harmony. But then why are you so miserable?
              <br />
              <br />
              You are miserable because you understand that your world isn’t
              really that perfect. Yes, you feel comfortable, secure and
              familiar with your surroundings, however, what you really want is
              “out there” beyond the confines of your comfort zone. You want
              “these things” because you see from afar other people enjoying
              “these things” every single day of your life. You, therefore, want
              to make “these things” also a part of your life, however in order
              to get to “those things,” you will need to leave the confines of
              your secure world and step into the unknown and unpredictable
              world that lies just beyond your comfort zone.
              <br />
              <br />
              Within this outside world, there are a plethora of opportunities
              and marvelous things that you would love to bring into your world.
              However, you do have two major hurdles. First of all, you don’t
              know how to quite get to “those things”, or how to bring them into
              your world. And because you don’t know, this creates doubt and
              uncertainty. You worry about making mistakes, you reflect on “what
              if” scenarios, and you fear the unknown. And this is often enough
              to prevent you from moving forward.
              <br />
              <br />
              Alternatively, you might know what to do. In fact, you might know
              exactly what it takes to bring “those things” into your world,
              however in order to get “those things”, you need to face certain
              challenges and potentially overcome specific problems that lie
              between you and the things you would like to acquire. And this all
              just seems too hard and arduous.
              <br />
              <br />
              You, therefore, want “those things” beyond your comfort zone,
              however, because you will need to go through some roadblocks and
              challenges along the way, this disheartens you from ever trying.
              You just feel as though the discomfort you will experience
              pursuing “these things” will just be too much to bear. You think
              to yourself that your life is good enough. You might not have
              everything you really want within your current world, however, you
              have enough. You have enough to make yourself feel comfortable and
              secure, and that really is all that matters. Isn’t it?
              <br />
              <br />
              On the surface, these are the things that really matter, however
              below the surface you just want so much more in your life. You
              don’t want to be one of those people who regrets all “those
              things” that they could have done but failed to try. You don’t
              want to be one of those people that mull over “what if” scenarios:
              <br />
              <br />
              <i>
                What if I did this…?
                <br />
                <br />
                What if I did that…?
                <br />
                <br />
                What if I pursued that goal…?
                <br />
                <br />
                What if I took that risk…?
                <br />
                <br />
                How would my life be different today if I took those chances?
                <br />
                <br />
              </i>
              Stepping outside your comfort zone might very well mean risking
              getting hurt, risking failure, and risking making mistakes.
              However, what are you risking staying within the confines of your
              comfort zone? What are you really risking missing out on if you
              don’t take a chance on yourself?
              <br />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open2}
        onClose={handleClose2}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <strong>The Components of a Comfort Zone.</strong>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              Your comfort zone can be broken down into the following
              components:
              <br />
              <br />
              1. The Habit Zone
              <br />
              2. The Action Zone
              <br />
              3. The Discomfort Zone
              <br />
              <br />
              <b>The Habit Zone</b> is where you spend most of your time. This
              is the world you are most familiar with. In fact, you have the
              necessary knowledge, skills, talents, and experience to live very
              comfortably within this world without great discomfort. You have
              after all already mastered all the problems that exist within this
              world. Therefore, whenever things go wrong, you already know what
              to do and how to respond. Life is therefore easy, effortless and
              somewhat satisfying.
              <br />
              Over the course of your life, you have developed certain habits,
              beliefs, psychological rules, etc, that define your life within
              the Habit Zone. There are for instance certain habits that you
              indulge in, things that you believe, and certain psychological
              rules that you live by that allow you to live comfortably within
              this zone. Now, of course, this is fantastic, however, the things
              that give you comfort here, are the things that prevent you from
              moving into the other two zones. This is significant because a
              certain habit, belief or psychological rule that works well within
              the Habit Zone is simply not congruent within other zones.
              <br />
              Every zone requires something of you. It, for instance, requires
              you develop a new set of habits and beliefs. It even requires that
              you adjust the psychological rules you live by. It also requires
              that you develop a different set of skills, gain more experience,
              acquire additional knowledge and resources, and build upon your
              talents. Each zone also requires you make certain sacrifices. This
              might mean letting go of certain habits or changing your routine.
              And all this is necessary in order to synchronize your psyche with
              these new zones.
              <br />
              <br />
              <b>The Action Zone</b> is the zone directly bordering your Habit
              Zone. It is a zone that feels somewhat comfortable, however,
              stepping into this zone is risky because it means that you might
              need to tackle some new things that you aren’t too familiar with.
              Furthermore, there are some unknown problems bordering this zone.
              These are problems you haven’t successfully dealt with before. And
              as such, they create some uncertainty in your life. This
              uncertainty, of course, doesn’t feel comfortable, and this
              automatically creates resistance within your psyche.
              <br />
              Given all this, you, however, do understand that you must make
              some tough decisions and take some form of action within this
              zone. Unfortunately, these are things you just can’t avoid doing.
              You can’t avoid it because your livelihood depends on the
              successful completion of these tasks. So even though these things
              seem somewhat uncomfortable or unfamiliar, you still do them
              because you have enough reasons to take these actions. As such the
              Action Zone becomes somewhat of a Necessity Zone where you feel
              compelled to do certain things in order to support yourself.
              <br />
              <br />
              The final zone is the <b>Discomfort Zone.</b> This is the zone
              that lies beyond your Action Zone. This zone isn’t necessarily a
              part of your comfort zone but rather borders the fringes of your
              comfort zone. Here you will find all the things that you haven’t
              as yet mastered. And because you haven’t mastered these things you
              cannot live within this zone. You can of course look at this zone
              from afar, however until you have gained the necessary experience,
              knowledge, and skills that are a hallmark of this zone, you will
              be unable to stay there for extended periods of time. However,
              it’s not just about experience, knowledge or skills, it’s
              primarily about the mindset you are required to cultivate within
              the confines of this zone.
              <br />
              It’s difficult to spend long periods of time within the Discomfort
              Zone because you have all these habits, beliefs, perspectives, and
              psychological rules that are keeping you attached to another zone.
              And this other zone is like another world. What works well within
              that world does not very often transition well into another world.
              And that’s the main reason why you feel uncomfortable when
              stepping into the Discomfort Zone. This mindset simply isn’t
              synchronized with the mindset you need to live in this world, and
              this, therefore, creates resistance on your part. This resistance
              creates self-sabotage patterns that prevent you from living within
              the Discomfort Zone for extended periods of time. You sabotage
              yourself because you subconsciously believe that you don’t belong
              to that world, and instead crave for the certainty found within a
              world you feel much more secure and comfortable with.
              <br />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open3}
        onClose={handleClose3}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle className="scroll-dialog-title">
          <strong>25 of the Most Inspiring Books Everyone Should Read.</strong>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div className="scroll-dialog-text">
              <b> 1. The Checklist Manifesto</b> <br />
              by Atul Gawande
              <br />
              <br />
              <b>2. The Four Agreements</b>
              <br /> by Miguel Ruiz
              <br />
              <br />
              <b>
                3. The Only Game in Town: Central Banks, Instability, and
                Avoiding the Next Collapse
              </b>
              <br /> by Mohamed A. El-Erian
              <br />
              <br />
              <b>4. The Varieties of Human Experience </b>
              <br />
              by William James
              <br />
              <br />
              <b>
                5. Moonwalking With Einstein: The Art and Science of Remembering
                Everything{" "}
              </b>
              <br />
              by Joshua Foer
              <br />
              <br />
              <b>6. A Tale of Three Kings </b>
              <br />
              by Gene Edwards
              <br />
              <br />
              <b>7. The Art of War </b>
              <br />
              by Sun Tzu
              <br />
              <br />
              <b>8. The Hard Thing About Hard Things </b>
              <br />
              by Ben Horowitz
              <br />
              <br />
              <b>9. Sam Walton, Made in America: My Story </b>
              <br />
              by Sam Walton
              <br />
              <br />
              <b>
                10. Setting the Table: The Transforming Power of Hospitality in
                Business{" "}
              </b>
              <br />
              by Danny Meyer
              <br />
              <br />
              <b>11. The Alchemist </b>
              <br />
              by Paulo Coelho
              <br />
              <br />
              <b>12. The Goal: A Process of Ongoing Improvement</b> <br />
              by Eliyahu Goldratt
              <br />
              <br />
              <b>
                13. When I Stop Talking, You'll Know I'm Dead: Useful Stories
                from a Persuasive Man
              </b>{" "}
              <br />
              by Jerry Weintraub
              <br />
              <br />
              <b>14. Blue Ocean Strategy</b> <br />
              by W. Chan Kim
              <br />
              <br />
              <b>15. The Widow Cliquot </b>
              <br />
              by Tilar J. Mazzeo
              <br />
              <br />
              <b>16. Count of Monte Cristo </b>
              <br />
              by Alexandre Dumas
              <br />
              <br />
              <b>17. I Love You All the Time </b>
              <br />
              by Jessica Elin Hirchman and Jennifer Elin Cole
              <br />
              <br />
              <b>18. The Five Dysfunctions of a Team: A Leadership Fable </b>
              <br />
              by Patrick Lencioni
              <br />
              <br />
              <b>19. The Power of Broke </b>
              <br />
              by Daymond John
              <br />
              <br />
              <b>
                20. American Icon: Alan Mulally and the Fight to Save Ford Motor
                Company
              </b>{" "}
              <br />
              by Bryce G. Hoffman
              <br />
              <br />
              <b>21. Double Your Profits in 6 Months or Less</b>
              <br /> by Bob Fifer
              <br />
              <br />
              <b>22. Crossing the Chasm </b>
              <br />
              by Geoffrey Moore
              <br />
              <br />
              <b>23. The Wu-Tang Manual </b>
              <br />
              by the RZA
              <br />
              <br />
              <b>
                24. Designing for Growth: A Design Thinking Tool Kit for
                Managers
              </b>{" "}
              <br />
              by Jeanne Liedtka and Tim Ogilvie
              <br />
              <br />
              <b>25. Ten Types of Innovation </b>
              <br />
              by Brian Quinn, Helen Walters, Larry Keeley, and Ryan Pikkel
              <br />
              <br />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div className="blogpage__intro">
        <img src={comfort} alt="" className="blogpage__intro__image" />
        <div className="blogpage__intro__text">
          Adam Sicinski
          <br />
          <span className="blogpage__intro__text__2">
            HOW TO EXPAND YOUR COMFORT ZONE TO ACHIEVE YOUR GOALS.
            <br />
          </span>
          <div onClick={handleClickOpen("body")} className="read__more">
            Read more...
          </div>
        </div>
      </div>

      <div className="blogpage__container__1">
        <div className="blogpage__container__1__left" id="leeeffft">
          <strong>Look Beyond Your Comfort Zone</strong>
          <br />
          <br />
          We all carry a comfort zone into every situation. In some situations,
          this comfort zone will be more expansive, and in other situations, it
          will be less expansive.
          <br />
          <br /> Therefore... <br />
          <br />
          <div onClick={handleClickOpen1("body")} className="read__more__1">
            Read more...
          </div>
        </div>

        <div className="blogpage__container__1__right">
          <strong>The Components of a Comfort Zone</strong>
          <br />
          <br />
          Your comfort zone can be broken down into the following components:
          <br />
          <br />
          1. The Habit Zone
          <br />
          2. The Action Zone
          <br />
          3. The Discomfort Zone
          <br />
          <br />
          <div onClick={handleClickOpen2("body")} className="read__more__1">
            Read more...
          </div>
        </div>
      </div>
      <div className="blogpage__container__2">
        <div className="blogpage__container__2__left">
          <CarouselPage1 />
        </div>
        <div className="blogpage__container__2__center">
          <div className="blogpage__container__2__center__upper">
            <p>
              <strong>
                25 of the Most Inspiring Books Everyone Should Read.
              </strong>
            </p>

            <br />
            <h6>
              {" "}
              Take it from these CEOs, founders, and other high-achieving
              leaders.
            </h6>
          </div>
          <div className="blogpage__container__2__center__lower">
            <b> 1. The Checklist Manifesto</b>
            <br /> by Atul Gawande
            <br />
            <b>2. The Four Agreements</b> <br />
            by Miguel Ruiz
            <br />
            <b>
              3. The Only Game in Town: Central Banks, Instability, and Avoiding
              the Next Collapse
            </b>{" "}
            <br />
            by Mohamed A. El-Erian
            <br />
            <div onClick={handleClickOpen3("body")} className="read__more__1">
              Read more...
            </div>
          </div>
        </div>
        <div className="blogpage__container__2__right">
          <strong className="Archives">
            Archives
            <br />
          </strong>
          <ul>
            <li>
              <a href="#1">
                Get Comfortable with Discomfort.
                <br />
                <br />{" "}
              </a>
            </li>
            <li>
              <a href="#2">
                An Introverts guide to getting social.
                <br />
                <br />
              </a>
            </li>
            <li>
              <a href="#3">
                The Number One Secret to Life Success: Baby Steps.
                <br />
                <br />
              </a>
            </li>
            <li>
              <a href="#4">
                Take a chance! The man who goes the furthest is the one who is
                willing to do and dare.
                <br />
                <br />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="blogpage__container__3" id="1">
        <img src={pic1} alt="" className="readmore__image1" />
        <div className="text">
          <b>Get Comfortable with Discomfort.</b>
          <br />
          <br />
          One way to get outside of your comfort zone is to literally expand it.
          Make it a goal to avoid running away from discomfort. Let’s stay with
          the theme of meeting people in social settings. If you start feeling a
          little panicked when talking to someone you’ve just met, try to stay
          with it a little longer than you normally would before retreating to
          comfort. If you stay long enough and practice often enough, it will
          start to become less uncomfortable.
          <br />
          <br />
          <b>Why Do We Resist Change?</b>
          <br />
          <br />
          Most people want to change their life, but are discouraged by the
          fears and self-doubt their false beliefs create. Even though you
          understand the benefits of changing your life, there is still the
          small fact that you are trying something new.
          <br />
          {isTruncated1 ? (
            ""
          ) : (
            <span className="moretext">
              The toughest part about “new” experiences are the uncertainty
              surrounding your results. New experiences can transform your life
              in the most astounding of ways. However, there is also the
              possibility your new experiences can cause the quality of your
              life to drastically deteriorate. As a result, your mind is left
              with a difficult decision. It can encourage your transformation
              and accept the fact that things may not go as planned. Or your
              mind can obstruct your effort to change your life and do
              everything in its power to maintain status quo.
              <br />
              <br />
              So, how to overcome your resistance to change? Read on to find
              out.
              <br />
              1. Outline the Benefits of Changing Your Life
              <br />
              2. Adopt a Growth Mindset
              <br />
              3. Understand That Failure Is Not Guaranteed
              <br />
              4. Build Your Confidence in Yourself
              <br />
              5. Keep a Success Journal
              <br />
              6. Appeal to Your Emotional Side
              <br />{" "}
            </span>
          )}
          <button className="read-more-button-1" onClick={toggleIsTruncated1}>
            {" "}
            {isTruncated1 ? "Read more" : "Read Less"}
          </button>
        </div>
      </div>

      <div className="blogpage__container__4" id="2">
        <div className="blogpage__container__4__slide">
          <CarouselPage2 />
        </div>
        <div className="text">
          <b>An Introverts guide to getting social.</b>
          <br />
          <br />
          In the introvert world, there’s the bit when all I want to do, is
          gladly stay in on the weekend, with my family and a Netflix marathon
          for company. Then there’s the other part that knows oh so well, that
          if I don’t venture out once in a while, there are opportunities I will
          definitely miss.
          <br />
          <br />
          I’m not a stranger to being the only I know in a room, forcing myself
          to approach people and hopefully conduct a conversation that doesn’t
          leave me flustered and/or with a dry mouth.
          <br />
          {isTruncated2 ? (
            ""
          ) : (
            <span className="moretext">
              So, I’ve put together a 5 step guide that will hopefully give you
              a boost, based on past experiences of my own.
              <br />
              Plus, you never need be alone - friends are allowed to hold your
              hand and give you the push you need. What recently gave me a new
              and refreshed push, was getting involved with my local community.
              They were looking for a someone to help them with the social
              media, website design and other creative things but who was I to
              apply? That’s what an inner voice was saying, and I hesitated and
              mulled it over, arguing that tens of other people would be
              applying and they were better. Yet, I knew there was no harm in
              trying and long story short, me getting involved with my local
              community has thrown me on the path of other people I didn’t think
              I would meet.
              <br />
              <br />
              Since taking that step into offering my skills to a bunch of
              people I assumed more amazing than me, I decided I needed to go a
              bit further - getting myself out there into the world of
              socialising and networking. One of those moments was the local pub
              night. I went by myself for the first time (even if my kids did
              come with) and even though I wished my husband was there to keep
              me company instead of going to the hockey game, it opened up new
              friendships and conversations. Those conversations lead to ideas
              and there’s nothing like a new burst of creative fuel.
              <br />
              Depending on what it is you aim to do for your small business or
              personal goals, setting a goal a week or day can help with
              crippling doubts of “Can I do this?” into “Well the last time
              wasn’t bad, I can do that again!”. One way I got around that, was
              reaching out to businesses and people for the purposes of the
              community blog (a project I had undertaken myself) and reminding
              myself I had purpose. If I got a refusal or silence, yes it felt
              like a slight, yet I had tried and that simply made me feel less
              scared about approaching people.
              <br />
              My other reasoning with helping out with my local community was
              the hope that my skill set will be enhanced and I would have more
              to offer and say in a few years from now. From the outset,
              assisting with social media accounts there, some website cleaning
              up and design there, may not seem like much. Yet another voice
              shouted about the bigger picture - where could all this lead me?
              Since applying, in the space of six months, I’ve met all sorts of
              interesting people, gotten commissions for other kinds of jobs,
              and really pin-pointed what it is I’m offering as a photographer.
              <br />
              There have been times where I’ve slapped the palm of my head,
              wishing I hadn’t done that thing, or did something differently and
              wish I hadn’t but trial and error, and knowing this would not
              matter in a year. Compared to the “Why did I not do that?” While
              the thought of face-palming may be enough to just stay on the road
              of being careful, the thought of not having tried something is
              enough to make me go out there, even if it means being that person
              who made a momentary error. It won’t matter the next year, believe
              me.
              <br />{" "}
            </span>
          )}
          <button className="read-more-button-1" onClick={toggleIsTruncated2}>
            {" "}
            {isTruncated2 ? "Read more" : "Read Less"}
          </button>
        </div>
      </div>

      <div className="blogpage__container__5" id="3">
        <img src={pic3} alt="" className="readmore__image1" />
        <div className="text">
          <b>The Number One Secret to Life Success: Baby Steps.</b>
          <br />
          <br />
          Hard work and discipline are certainly valuable traits when trying to
          make changes in our lives or attain important goals, however, even
          diligence and persistence are often not enough to get the results
          we’re looking for.
          <br /> The lack of an effective strategy is often our greatest
          obstacle. In our impatience for results, we try to change too much at
          once, and expect too much of ourselves, and this impatience usually
          leads to frustration and failure. This is why most people fail to keep
          their New Year’s resolutions.
          <br />
          Sometimes we don’t even take the first step because our dreams, goals,
          and desires seem so overwhelming,so intimidating, and so unachievable
          that we give up before we even start. Maybe we just need to try a
          different strategy.
          <br />
          {isTruncated3 ? (
            ""
          ) : (
            <span className="moretext">
              I’m reminded of the popular saying,
              <strong> “Life is a marathon, not a sprint.”</strong> That same
              philosophy can be applied when we’re attempting to make changes in
              our lives: it’s true of career advancement or building a business,
              educational goals, weight loss or fitness, organization, habits,
              and certainly when trying to build or change relationships.
              <br />
              <br />
              <strong>
                <h2>Learn to take baby steps</h2>
              </strong>
              This may be the simplest, yet the most effective strategy we can
              use, as consistency, and learning to build on small victories are
              the keys to success.The happiest and most successful people will
              tell you that they have achieved their level of life and work
              success by taking small steps, and making one positive choice
              after another.
              <br />
              <br />
              <i>Look for the mini victories</i>
              <br />
              <br />
              What is a mini victory? A mini victory is a realistic,
              quickly-achievable, smaller portion of a larger objective. This
              bite-size goal will vary depending upon our specific intention,
              time frame, and motivation. The reason this strategy works is
              because we are able to see tangible progress, rather quickly, so
              we feel a sense of accomplishment and are encouraged to move on to
              our next mini goal, using the small successes as stepping-stones
              to larger change.
              <br />
              <br />
              <b>We all want to be more organized</b>, but when we attempt to
              organize or de-clutter our entire home or office all at once, we
              usually get overwhelmed and don’t finish the project. Instead,
              when we try to organize one area at a time, change one messy
              habit, or develop one productive routine, we have better success.
              Tackle one project, and then add in another change when the first
              one is well established.
              <ul>
                <li>Make a master list of everything you need to do.</li>
                <li>Eliminate one or two piles.</li>
                <li>Clear off your desk or the kitchen counter.</li>
                <li>Sort through old mail.</li>
                <li>Clear out your email inbox.</li>
                <li>Start cleaning off your desk at the end of the day.</li>
                <li>Study or read for one hour a day.</li>
                <li>
                  Gather the empty cups, bags, and papers each time you get out
                  of the car.
                </li>
              </ul>
              This strategy is useful in almost every area of life, and when
              trying to achieve nearly any goal. Just work towards one
              mini-victory at time and make sure you celebrate each achievement
              in some small way—a little success goes a long way in propelling
              us to the finish line.
              <br />{" "}
            </span>
          )}
          <button className="read-more-button-1" onClick={toggleIsTruncated3}>
            {" "}
            {isTruncated3 ? "Read more" : "Read Less"}
          </button>
        </div>
      </div>

      <div className="blogpage__container__6" id="4">
        <img src={pic4} alt="" className="readmore__image2" />
        <div className="text">
          <b>
            "Take a chance! All life is a chance. The man who goes the furthest
            is generally the one who is willing to do and dare.” – Dale Carnegie
          </b>
          <br />
          <br />
          Many are turned off by risks. It is actually easier and more
          comfortable to sit down in the safe spot and wait. But, this is what
          distinguishes the doers from the dreamers.
          <br />
          <br />
          While the dreamers is still sleeping and waiting for the best moment
          to take action, the taker has caught the rewards. Risk takers are more
          likely to be successful because they do not limit themselves and are
          willing to put in their energy when every other person is hesitant.
          <br />
          {isTruncated4 ? (
            ""
          ) : (
            <span className="moretext">
              <b>
                {" "}
                <br />8 Reasons Risk Takers Are More Likely To Be Successful.
              </b>
              <b>
                <h3>1. They Experience a Passion in Every Risk They Take.</h3>
              </b>
              With risk comes a fire, a burning push to keep you going and reach
              the finish line. Most times, people who are adventurous are the
              ones who take risk. They are ignited with a zeal to reach new
              heights and such zeal empowers them to be more creative and
              prepared to win.
              <b>
                <h3>2. They Stand Out.</h3>
              </b>
              People who take risk are bold. Somehow this courage is shown and
              endearing. With courage also comes confidence and alertness. When
              every other person withdraws, they are willing to stay in. This
              makes risk takers leaders as they are anointed to be by their own
              self.
              <b>
                <h3>3. They Gain Knowledge.</h3>
              </b>
              The pain that you know doesn’t hurt. It is actually what you don’t
              know that hurts you. Knowledge is vital to success. Risk takers
              are able to identify such knowledge because they are willing to
              undergo a process that will provide such knowledge. Through such
              knowledge, they can navigate future steps and sail through
              difficult waters.
              <b>
                <h3>4. They Pursue Success.</h3>
              </b>
              Risk takers know that success won’t fall in your lap. You have to
              chase and hunt for it. That is what they do when they take risks.
              They are shooting for the sky amidst the storm. Through that
              chase, they find seemingly rare opportunities that may never have
              been found if they had waited. Risk takers are active and ready
              for the pursuit of success.
              <b>
                <h3>5. They Are Not Afraid of Failure.</h3>
              </b>
              The more risk you take, the less you see anything that can stop
              you. You are practically unstoppable because risk taking has
              strengthened your will to keep on going no matter what. Fear is a
              mental block that hinders many from achieving their dreams and
              becoming successful. But risk takers do not feel that fear. They
              are unstoppable.
              <b>
                <h3>6. They Set a Higher Standard.</h3>
              </b>
              Risk takers are prided with dreaming big. It all starts from a
              particular reward attained from a particular venture. Risk takers
              want to get more after attaining something worthwhile from
              previous actions they took. With every risk comes the will to be
              above average and trudge into newer and undefined territories.
              <b>
                <h3>7. They Learn All the Way Through.</h3>
              </b>
              It is not simply about knowledge. They discover themselves and
              harness their own inner strength. The truth is that against
              certain opinions, it will be important to know that risk takers
              are not stupid. They are smart. Because of the learning and
              knowledge they garner through many processes, they are able to
              understand what they can take and what they cannot take. They
              don’t just dip themselves into every risk; rather, they dip
              themselves after perusing the areas and dimensions of what they
              are about to pursue. Then they go for it.
              <b>
                <h3>8. They Change and Have High Adaptability.</h3>
              </b>
              There is nothing static with risk takers. They attain more freedom
              and flexibility. They are not found wanting as risk helps them to
              either define a change or adapt to a change. Risk takers can never
              be stuck with the tide. Rather, they move with it and set the tone
              for even bigger changes. Granted, doing something different could
              mean discomfort and redirection, yet getting out of that comfort
              zone is that which will bear a mark and bring to you the life you
              want. This is why risk takers will always rule!
              <br />{" "}
            </span>
          )}
          <button className="read-more-button-1" onClick={toggleIsTruncated4}>
            {" "}
            {isTruncated4 ? "Read more" : "Read Less"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
