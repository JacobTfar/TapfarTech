---
layout: /src/layouts/MarkdownPostLayout.astro
title: Modern Web Animation Techniques with TailwindCSS
author: Jacob Tapfar
description: "Discover advanced CSS animation techniques using TailwindCSS to create engaging user interfaces. Learn how to implement professional animations that enhance user experience while maintaining performance and accessibility standards."
image:
  url: "/images/posts/animated-borders-tailwind.webp"
  alt: "Modern web animations showcase featuring TailwindCSS techniques for professional business websites, demonstrating gradient borders and smooth transitions."
pubDate: 2025-03-27
tags:
  [
    "web-development", "tailwindcss", "animations", "user-experience", "frontend"
  ]
languages: ["tailwind", "html", "css"]
---

In modern web development, subtle animations can significantly enhance user experience and create professional, engaging interfaces. When building client websites at TapfarTech, I've found that strategic use of CSS animations helps businesses stand out while maintaining performance and accessibility.

## Why Animation Matters for Business Websites

### Professional Impact
- **Enhanced credibility** through polished visual effects
- **Improved user engagement** with interactive elements
- **Brand differentiation** in competitive markets
- **Modern aesthetic** that builds trust with potential clients

### Technical Benefits
- **Performance optimization** using CSS over JavaScript animations
- **Accessibility compliance** with proper motion preferences
- **Cross-browser compatibility** with fallback options
- **Maintainable code** using utility-first frameworks

## Advanced Border Animation Technique

The `border` property in CSS cannot be animated natively, but we can create sophisticated effects using modern CSS techniques. This approach is particularly effective for call-to-action buttons and hero sections on business websites.

## Types of Gradients in CSS

To achieve our animated border effect, we need to know the different types of gradients in CSS:

- **Linear Gradient:** Linear gradient along a specific direction.
  - [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- **Radial Gradient:** Radial gradient from a central point outward.
  - [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- **Conic Gradient:** Conic gradient around a central point, creating a "wheel" effect.
  - [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)

For our animated border, we'll use **conic gradient**, as it allows us to create a spinning effect.

## Implementing the Animated Border

```html
<div
  class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black  rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold ">
      Parent container background
    </p>
  </div>
</div>
```

<div class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px">
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold mt-8">
      Parent container background
    </p>
  </div>
</div>

<br>
<hr>
<br>

If we add a background to the child container, we achieve the border effect:

```html
<div
  class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px"
>
  <!-- Parent container -->
  <div class="p-10 rounded-2xl dark:dark:bg-zinc-900 bg-mint-50">
    <!-- Child container -->
    <p class="text-white text-center font-semibold">
      By adding a background to the child container, we achieve the border effect
    </p>
  </div>
</div>
```

<div class="w-full max-w-lg bg-conic/[from_0deg] from-white to-white dark:from-black via-green-400 dark:to-black rounded-2xl p-px">
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold mt-8">
      By adding a background to the child container, we achieve the border effect 
    </p>
    
  </div>
</div>

## Adding Animation with `@property`

We'll use `@property` to define a custom property that will allow us to animate the border:

```css
@property --border-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
```

Then, we create the animation with `@keyframes` and add it to the Tailwind CSS theme:

```css
@theme {
  --animate-rotate-border: border-rotate 3s linear infinite;
  @keyframes border-rotate {
    to {
      --border-angle: 360deg;
    }
  }
}
```

Now we'll implement it in our parent container classes:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold">
      Animated parent container background
    </p>
  </div>
</div>
```

<div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px">
      <div class="p-10 rounded-2xl bg-transparent">
        <p class="text-white text-center font-semibold mt-8">
          Animated parent container background
        </p>
      </div>
    </div>

<br>

<div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-px"
    >
      <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
        <p class="text-white text-center font-semibold mt-8">
          This is how it looks with a background in our content
        </p>
      </div>
    </div>

## Adjusting the Border Thickness

By modifying the `padding`, we can control the border thickness:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-[3px]"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold">
      By adjusting the padding we can "increase the border thickness"
      <br />
      <code>p-[3px]</code>
    </p>
  </div>
</div>
```

<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black animate-rotate-border rounded-2xl p-[3px]"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold mt-8">
      By adjusting the padding we can "increase the border thickness" 
      <br>
      <code>p-[3px]</code>
    </p>
  </div>
</div>

## Customizing the Gradient

In Tailwind CSS, we can control the position of the gradient colors:

- `from-*` → Starting color of the gradient.
- `via-*` → Intermediate color.
- `to-*` → Final color of the gradient.

We can also adjust the color positions, for example:

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold">
      By adjusting the color positions we achieve a different effect
      <br />
      <code>from-30% to-60%</code>
    </p>
  </div>
</div>
```

<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-white to-white dark:from-black via-green-400 dark:to-black from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl bg-transparent">
    <p class="text-white text-center font-semibold mt-8">
      By adjusting the color positions we achieve a different effect
      <br />
      <code>from-30% to-60%</code>
    </p>
  </div>
</div>

## Final Result

I'll make some small adjustments, changing the from and to colors to achieve a more natural effect. Also, I'll use a 1px padding.

```html
<div
  class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-green-200/20 via-green-400 to-green-200/20 from-30% to-60% animate-rotate-border rounded-2xl p-px"
>
  <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
    <p class="text-white text-center font-semibold">
      This is the final result
    </p>
  </div>
</div>
```

 <div
      class="w-full max-w-lg bg-conic/[from_var(--border-angle)] from-green-200/20 via-green-400 to-green-200/20 from-30% to-60% animate-rotate-border rounded-2xl p-px"
    >
      <div class="p-10 rounded-2xl dark:bg-zinc-900 bg-zinc-50">
        <p class="text-white text-center font-semibold mt-8">
          This is the final result
        </p>
      </div>
    </div>

## Conclusion

I hope this guide has helped you understand how to create an animated border with Tailwind CSS and that you can implement it in your projects. Experiment with gradients and animations to get unique effects! 🎨✨ 