import { chi } from './core/chi.js';
import { Util } from './core/util.js';

import { Accordion, factory as accordion } from './components/accordion';
import { DatePicker, factory as datePicker } from "./components/date-picker";
import { Drawer, factory as drawer } from './components/drawer';
import { Dropdown, factory as dropdown } from './components/dropdown';
import { ExpansionPanel, factory as expansionPanel, EXPANSION_PANEL_STATES } from "./components/expansion-panel";
import { FloatingLabel, factory as floatingLabel } from "./components/floating-label";
import { MobileNav, factory as mobilenav } from "./components/mobile-navigation";
import { Modal, factory as modal } from './components/modal';
import { Navigation, factory as navigation } from "./components/navigation";
import { NumberInput, factory as numberInput } from './components/number-input';
import { Popover, factory as popover } from "./components/popover";
import { RangeSlider, factory as rangeSlider } from "./components/range-slider";
import { Sidenav, factory as sidenav } from "./components/sidenav";
import { GlobalNav, factory as globalNav } from "./components/global-nav";
import { Tab, factory as tab } from './components/tab';
import { Tooltip, factory as tooltip } from "./components/tooltip";

export {
  chi as core,
  Util,
  
  accordion,
  datePicker,
  drawer,
  dropdown,
  expansionPanel,
  floatingLabel,
  mobilenav,
  modal,
  navigation,
  numberInput,
  popover,
  rangeSlider,
  sidenav,
  globalNav,
  tab,
  tooltip,

  Accordion,
  DatePicker,
  Drawer,
  Dropdown,
  ExpansionPanel,
  FloatingLabel,
  MobileNav,
  Modal,
  Navigation,
  NumberInput,
  Popover,
  RangeSlider,
  Sidenav,
  GlobalNav,
  Tab,
  Tooltip,

  EXPANSION_PANEL_STATES
};

if (typeof window !== 'undefined') {
  window.chi = {
    core: chi,
    Util,
    accordion,
    datePicker,
    drawer,
    dropdown,
    expansionPanel,
    floatingLabel,
    mobilenav,
    modal,
    navigation,
    numberInput,
    popover,
    rangeSlider,
    sidenav,
    globalNav,
    tab,
    tooltip,
    Accordion,
    DatePicker,
    Drawer,
    Dropdown,
    ExpansionPanel,
    FloatingLabel,
    MobileNav,
    Modal,
    Navigation,
    NumberInput,
    Popover,
    RangeSlider,
    Sidenav,
    GlobalNav,
    Tab,
    Tooltip,
    EXPANSION_PANEL_STATES
  };
}
