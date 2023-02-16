export default {
  name: "DayBook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "NoEntry",
      component: () =>
        import(
          /* webpackChunkName: "no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
        path: ":id",
        name: "Entry",
        component: () =>
          import(
            /* webpackChunkName: "entry" */ "@/modules/daybook/views/EntryViews.vue"
          ),
      },
  ],
};
