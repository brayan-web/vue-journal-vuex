<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 entry-day fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3 entry-month">{{ month }}</span>
        <span class="mx-2 fs-4 entry-date fw-light">{{ yearDay }}</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary">
          Subir Foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Que sucedio hoy?"></textarea>
    </div>
  </template>

  <Fab @set-entry="setEntry" icon="fa-save" />
  <img
    src="https://cdn.pixabay.com/photo/2023/02/06/00/21/scooter-7770871_960_720.png"
    class="img-thumbn ail"
    alt="entry-picture"
  />
</template>

<script>
import Fab from "../components/Fab.vue";
import getDayMonthYear from "../helpers/getDayMonthYear";
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String,
      requiered: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  components: {
    Fab,
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions('journal',['updateEntry', 'createEntry']),
 
    loadEntry() {
         let entry;
      if(this.id === 'new'){
        entry = {
          text: '',
          date: new Date().getTime()
        }
      }else{
       entry = this.getEntryById(this.id);
      if (!entry) {
        return this.$router.push({
          name: "NoEntry",
        });
      }
      }

    
      this.entry = entry;
    },
   async setEntry(){
        if(this.entry.id){
       await this.updateEntry(this.entry)

        }else{
         const id = await this.createEntry(this.entry);
        this.$router.push({
            name: 'Entry',
            params:{
              id: id
            }
        })

        }
    }
  },
  created() {
    // console.log("este es el id router", this.id);
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 6rem;
}

textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
