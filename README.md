# React 18.0
Just testing news from react 18
 * new api -> [useId, useTransition, useDeferredValue, useSyncExternalStore, useInsersionEffect,  ]
 * concurenncy -> foundational update to React's core rendering model.
    In a concurrent render, this is not always the case. React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.

    Another example is reusable state. Concurrent React can remove sections of the UI from the screen, then add them back later while reusing the previous state. For example, when a user tabs away from a screen and back, React should be able to restore the previous screen in the same state it was in before. In an upcoming minor, we’re planning to add a new component called <Offscreen> that implements this pattern. Similarly, you’ll be able to use Offscreen to prepare new UI in the background so that it’s ready before the user reveals it.

    You can work with it by using new hooks: suspense, transitions, ssr

    React team expects that user concurrenct development will be invovoled into extra libraries.

  * strict mode which does run only in debug mode, will show extra warnings and errors and also invoke functions double time
  * suspense allows you  display fallback ntil its children finished loading, it can be used with fetching also. Its not recomended to use as      hoc, it works best when its integrated deeply into app like in router or data layer.
  * server components -> experimental
  * batching -> multiple state updates into a single re-render for better performance. Without automatic batching we only abtched upadtes inside react event handlers.
  * transitions -> to handle more important and less importants rerenders
