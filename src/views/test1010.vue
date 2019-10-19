
<template>
  <div class="page el-customize">
    <h1>幕間物語：友情 10 連抽</h1>
    <p>你發現手上的貝德維爾差一張就寶五，剛好你又有 2 萬友情點</p>

    <b>Context:</b>
    <ul>
      <li>抽一次是 200 點，十連抽 2000 點</li>
      <li>每一張卡可重複隨機出現</li>
    </ul>

    <b>Force:</b>
    <ul>
      <li>抽卡介面仿照實際遊戲內容呈現，可選擇單抽或十連抽</li>
      <li>依照現有友情點數，需顯示可抽次數 (小數點無條件捨去)</li>
      <li>若友情點數不足，顯示「友情點數不足」、Button 狀態不可操作</li>
      <li>若點數不足夠抽取十次，僅顯示一個可抽取多少次的Button</li>
    </ul>
    <p>----------作答區----------</p>
    <br />
    <div class="game_panel">
      <ul class="game_info">
        <li>友情點數: {{ account.friendShip }} 可抽次數: {{ account.playableCount }}</li>
      </ul>
      <div v-if="beforePick" class="display">
        <el-button class="pickup" :disabled="buttonDisable" @click="handlePickupDisplay(button.one.count)">{{ button.one.msg }}</el-button>
        <el-button v-if="multiPickButton" class="pickup" @click="handlePickupDisplay(button.mult.count)">{{ button.mult.msg }}</el-button>
      </div>
      <div v-if="pickStart" class="pickupBlock">
        <div class="display" data-row-count="5">
          <div v-for="(item, index) in pickPool" :key="index" class="data_row card_obj">
            <span class="card">
              <p>{{ item.name }}</p>
            </span>
          </div>
        </div>
        <div class="btn_outer">
          <el-button class="pickup" @click="handlePickupDisplay(0)">繼續召喚</el-button>
        </div>
      </div>
    </div>
    <div v-if="buttonDisable" class="row horizontal v_center" data-space="space-vertical">
      <p>突然有</p>
      <div class="input_inner" data-width="10rem" data-space="space-horizontal">
        <el-input-number v-model="rentCount" type="text" :min="1" placeholder="人數" />
      </div>
      <p>個人借用你的寶五滿破寶石翁賴光</p>
      <el-button type="primary" @click="chargePoint">確認</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dataEvent",
  data() {
    return {
      beforePick: true,
      pickStart: false,
      account: {
        friendShip: 2100,
        playableCount: 0, // 初始值 0
      },
      rentCount: 1,
      cost: 200,
      buttonDisable: false,
      multiPickButton: true,
      button: {
        one: {
          msg: '',
          count: 0
        },
        mult: {
          msg: '',
          count: 0
        }
      },
      pickPool: [],
      cardPool: [
        { class: 'saber', name: '貝德維爾', rare: 3 },
        { class: 'mystic', name: '龍脈', rare: 3 },
        { class: 'mystic', name: '奇蹟求道者', rare: 3 },
        { class: 'saber', name: '睿智的大火', rare: 3 },
        { class: 'berserker', name: '清姬', rare: 3 },
        { class: 'berserker', name: '大流士三世', rare: 3 },
        { class: 'rider', name: '美杜莎', rare: 3 },
        { class: 'rider', name: '布狄卡', rare: 3 },
        { class: 'caster', name: '睿智的大火', rare: 3 },
        { class: 'caster', name: '美狄亞', rare: 3 },
        { class: 'lancer', name: '庫夫林', rare: 3 },
        { class: 'archer', name: '阿拉什', rare: 1 },
        { class: 'caster', name: '安徒生', rare: 2 }
      ]
    }
  },
  created() {
    this.buttonMsg
  },
  methods: {
    handlePickupDisplay(val) {
      this.beforePick = !this.beforePick
      this.pickStart = !this.pickStart
      this.buttonMsg
      this.pickCard(val)
      this.account.friendShip = this.account.friendShip - (this.cost * val)
      if (val == 0) {
        this.pickPool = []
      }
    },
    chargePoint() {
      // 出借從者一次+25
      let increase = this.rentCount * 25
      this.account.friendShip += increase
      console.log('出借從者得到: ' + increase + ' 友情點數' )
      this.buttonMsg
    },
    pickCard(val) {
      let max = val
      let arrIndex = 0
      for (let i = 0; i < val; i++) {
        if (val < this.cardPool.length) {
          max = this.cardPool.length
        }
        arrIndex = Math.floor(Math.random() * max)
        this.pickPool.push(this.cardPool[arrIndex])
        console.log(arrIndex)
      }
    }
  },
  computed: {
    buttonMsg() {
      let cost = this.cost // cost固定200
      let totalPoint = this.account.friendShip
      let multCount = Math.floor((totalPoint / this.cost))
      let oneCount = 0
      // 別忘了預設值重置
      this.buttonDisable = false
      this.multiPickButton = true
      this.account.playableCount = multCount
      // 判斷點數是否足夠抽一次 (用三元式)
      totalPoint >= cost ? oneCount = 1 : oneCount = 0
      this.button.one.count = oneCount
      this.button.one.msg = `${oneCount + ' 回召喚'}`
      // 假如右側Button不顯示且友情點數不足200則按鈕訊息顯示 "友情點數不足"
      if (totalPoint < cost && oneCount == 0) {
        this.button.one.msg = '友情點數不足'
        this.buttonDisable = true
      }
      // 判斷點數是否足夠抽十次，如果不夠十次，剩餘次數是否大於兩次?
      if (multCount >= 10) {
        this.button.mult.msg = `${'10 回召喚'}`
        this.button.mult.count = 10
      } else if (multCount < 2) {
        this.multiPickButton = false
      } else {
        this.button.mult.count = multCount
        this.button.mult.msg = `${multCount + ' 回召喚'}`
      }
      // 小於兩次時右側按鈕不顯示
      if (multCount < 2) {
        this.multiPickButton = false
      }
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

// FlexBox

@mixin boxSizing {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
}

@for $i from 0 through 24 {
    .flex_#{$i} {
        flex: $i;
    }
}

@mixin flexBox($direction) {
    display: flex;
    flex-direction: $direction;
}

@mixin flexAlign($alignItems, $justifyContent) {
    align-items: $alignItems;
    justify-content: $justifyContent;
}


@mixin dataRowCount {
    @for $i from 1 through 24 {
        [data-row-count="#{$i}"] {
            .data_row {
                width: calc(100% / #{$i});
            }
        }
    }
}

@for $i from 1 through 24 {
    [data-row-count="#{$i}"] {
        .data_row {
            width: calc(100% / #{$i});
        }
    }
}

.row {
    @include boxSizing;

    position: relative;
    width: 100%;
    margin: 0;

    @include dataRowCount;

    &.full {
        width: 100%;
        height: 100%;
    }

    &.horizontal {
        @include flexBox(row);

        &.v_center {
            @include flexAlign(center, flex-start);
        }

        &.h_center {
            @include flexAlign(flex-start, center);
        }

        &.end {
            @include flexAlign(center, flex-end);
        }

        &.bottom {
            @include flexAlign(flex-end, center);
        }

        &.bottom_left {
            @include flexAlign(flex-end, flex-start);
        }

        &.bottom_right {
            @include flexAlign(flex-end, flex-end);
        }
    }

    &.vertical {
        @include flexBox(column);

        &.v_center {
            @include flexAlign(flex-start, center);
        }

        &.h_center {
            @include flexAlign(center, flex-start);
        }

        &.end_right {
            @include flexAlign(flex-end, flex-end);
        }

        &.end_left {
            @include flexAlign(flex-end, flex-start);
        }

        &.end {
            @include flexAlign(flex-end, center);
        }
    }

    &.normal {
        @include flexAlign(flex-start, flex-start);
    }

    &.center {
        @include flexAlign(center, center);
    }

    &.half {
        width: 50%;
    }

    &.wrap {
        flex-wrap: wrap;
    }

    &.space {
        justify-content: space-between;
    }

    &.inset {
        @include boxSizing;

        padding: 1rem;
    }

    &.static {
        width: auto;
    }
}

// reset

.game_panel {
  @include flexBox(column);
  @include boxSizing;
  width: 1000px;
  height: 420px;
  border: 1px solid;
  background: url('http://i2.hdslb.com/bfs/archive/bc4487d5132fd8dc09e195502b10a11569e6f304.jpg') no-repeat center;
  background-size: 100%;
  
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.game_info {
    @include flexBox(row);
    @include flexAlign(center, flex-start);
    @include boxSizing;
    padding: 0.5rem;
    height: 1.5rem;
    background: rgba(0,0,0,0.5);
    color: #fff;
  }
  .pickupBlock{
    @include flexBox(column);
    width: 100%;
    height: 100%;
  }
  
  .btn_outer {
    @include flexBox(row);
    @include flexAlign(center, center);
    width: 100%;
    height: 80px;
  }
  .display {
    @include flexBox(row);
    @include flexAlign(center, center);
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
  }
  .card_obj {
     @include flexBox(row);
     @include flexAlign(center, center);
    .card {
      @include flexBox(row);
      @include flexAlign(center, center);
      width: 80px;
      height: 80px;
      border-radius: 4px;
      background: rgba(0,0,0,0.8);
      color: #fff;
    }
  }
}

button.pickup {
  border: none;
  border-radius: 6px;
  width: 120px;
  height: 54px;
  font-size: 1.2rem;
  margin: 0 1rem;
  color: #fff;
  background-color: #0088ff;
  cursor: pointer;
}
</style>