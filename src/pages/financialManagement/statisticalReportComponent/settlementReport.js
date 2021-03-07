import myhead from "../../../components/myhead";
// require styles

export default {
  name: "carrousel",
  components: {
    myhead
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-02",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-04",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-01",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-08",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-06",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-07",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-07",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-07",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        },
        {
          date: "2016-05-07",
          name: 0,
          province: 0,
          city: 0,
          address: 0,
          zip: 0
        }
      ],
      option: "",
      total: 1,
      isActive: true,
      dialogVisible: false,
      selected: "所有",
      pagenum: 1,
      token: "",
      pagesize: 6,
      chart: false
    };
  },
  computed: {},
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    this.token = localStorage.getItem("token").replace(/\"/g, "");
  },
  methods: {},
  handleCurrentChange(newPage) {
    this.pagenum = newPage;
  }
};
