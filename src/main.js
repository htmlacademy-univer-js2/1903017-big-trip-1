import TripTabsView from './view/trip-tabs-view.js';
import StatsView from './view/stats-view.js';
import { render, RenderPosition, remove } from './render.js';
//import {generatePoint} from './mock/point.js';
import TripPresenter from './presenter/trip-presenter';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import { MenuItem } from './utils/sort-consts.js';
import ApiService from './api-service.js';
//import TripInfoView from './view/trip-info-view.js';

//const POINT_COUNT = 14;

//const points = Array.from({length: POINT_COUNT}, generatePoint);

const AUTHORIZATION = 'Basic mk8w236sl22785i';
const END_POINT = 'https://16.ecmascript.pages.academy/big-trip';

const pageMainElement = document.querySelector('.page-body');
const tripControlsNavigationElement = document.querySelector('.trip-controls__navigation');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
tripControlsFiltersElement.classList.add('visually-hidden');

const apiService = new ApiService(END_POINT, AUTHORIZATION);

const pointsModel = new PointsModel(apiService);

const filterModel = new FilterModel();

//render(siteTripMainElement, new TripInfoView().element, RenderPosition.AFTERBEGIN);
//render(tripControlsNavigationElement, siteMenuComponent, RenderPosition.BEFOREEND);
const siteMenuComponent = new TripTabsView();

const tripPresenter = new TripPresenter(pageMainElement, pointsModel, filterModel, apiService);

const filterPresenter = new FilterPresenter(tripControlsFiltersElement, filterModel, pointsModel);

let mode = 'TABLE';

const handlePointNewFormClose = () => {
  siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.TABLE}]`).classList.remove('visually-hidden');
  siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.STATS}]`).classList.remove('visually-hidden');
  //siteMenuComponent.setMenuItem(MenuItem.TASKS);
};

let statisticsComponent = null;

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      if (mode !== 'TABLE') {
        filterPresenter.init();
        tripPresenter.init();
        remove(statisticsComponent);
        mode = 'TABLE';
      }
      break;
    case MenuItem.STATS:
      if (mode !== 'STATS') {
        filterPresenter.destroy();
        tripPresenter.destroy();
        statisticsComponent = new StatsView(pointsModel.points);
        render(pageMainElement, statisticsComponent, RenderPosition.BEFOREEND);
        mode = 'STATS';
      }
      break;
  }
};

filterPresenter.init();

tripPresenter.init().finally(() => {
  pointsModel.init().finally(() => {
    siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
    render(tripControlsNavigationElement, siteMenuComponent, RenderPosition.BEFOREEND);
    tripControlsFiltersElement.classList.remove('visually-hidden');
  });
});

document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
  evt.preventDefault();
  remove(statisticsComponent);
  filterPresenter.destroy();
  filterPresenter.init();
  tripPresenter.destroy();
  tripPresenter.init().finally(() => {
    tripPresenter.createPoint(handlePointNewFormClose);
    siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.TABLE}]`).classList.add('visually-hidden');
    siteMenuComponent.element.querySelector(`[data-menu-item=${MenuItem.STATS}]`).classList.add('visually-hidden');
    mode = 'TABLE';
  });
});

