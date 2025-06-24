export type CarData = {
  id: Id;
  jatoCode: string;
  clientId: string;
  vin: string;
  licensePlate: string;
  brand: string;
  model: string;
  type: string;
  vehicleType: number;
  vehicleTypeName: string;
  doors: number;
  body: number;
  bodyName: string;
  seats: number;
  fuelType: number;
  fuelTypeName: string;
  transmission: number;
  transmissionName: string;
  mileage: number;
  year: number;
  colorNumber: number;
  colorDefaultName: string;
  colorName: string;
  paintType?: number;
  interior?: number;
  colorInterior: string;
  description: string;
  has360: boolean;
  imageUrls: string[];
  videoUrls: string[];
  price: number;
  priceAllIn: number;
  priceOnline: number;
  incomeTax?: number;
  taxDeductible: boolean;
  isNew: boolean;
  isOccasion: boolean;
  nap: boolean;
  bovagWarranty?: number;
  minRoadTax: number;
  maxRoadTax: number;
  imported: boolean;
  firstAdmission: string;
  firstAssumption: string;
  measurements: Measurements;
  specifications: Specifications;
  state: State;
  accessories: Accessory[];
  extraFields: ExtraFields;
  url: string;
  urlCheckout: string;
  vehicleTitle: string;
  isSold: boolean;
  updatedDate: string;
  createdDate: string;
  formattedPriceOnline: string;
  formattedPriceLease: string;
  metaTitle: string;
  metaDescription: string;
  isHidden: boolean;
  isSpecialOffer: boolean;
  extraInformation: ExtraInformation[];
  hasPriceLease: boolean;
  hasPriceOnline: boolean;
  lowestPriceLease: number;
  financeMethod: string;
  taggedImageUrls: [];
  action: string;
  apkOnDelivery: boolean;
  modelYear: number;
  upsellItemIds: [];
  labels: [];
  leasePrices: [];
  btw?: number;
  apk?: string;
  isPluginHybrid?: boolean;
  factoryWarranty?: string;
  usageInfo?: UsageInfo;
};

type Id = {
  carId: number;
  ownerId: string;
};

type Measurements = {
  weight: number;
  maximumPermissibleMass?: number;
  height?: number;
  length?: number;
  width?: number;
  wheelbase: number;
  loadCapacity?: number;
  towingWeight?: number;
  towingBrakedWeight?: number;
};

type Specifications = {
  powerKw?: number;
  powerPk?: number;
  powerHp?: number;
  topspeed: number;
  accelerationSpeed: number;
  consumptionCity?: number;
  consumptionHighWay?: number;
  consumptionMixed: number;
  fuelCapacity: number;
  energyLabel: string;
  carbonOutput?: number;
  sootFilter: boolean;
  torque: number;
  engineCapacity: number;
  numberOfCilinders: number;
  driveTrain: number;
  driveTrainName: string;
  gears?: number;
  spareWheel: number;
  electricWindows: boolean;
  alloyWheels: boolean;
  metallicPaint: boolean;
  panoramicRoof: boolean;
  towbar: boolean;
  airConditioning: boolean;
  audioInstallation: boolean;
  leatherInterior: boolean;
  boardComputer: boolean;
  climateControl: boolean;
  middleArmRest: boolean;
  navigationSystem: boolean;
  sportsSeats: boolean;
  abs: boolean;
  airbag: boolean;
  centralLockingSystem: boolean;
  cruiseControl: boolean;
  esp: boolean;
  isoFix: boolean;
  parkingSensor: boolean;
  adaptiveCruiseControl: boolean;
  fourWheelDrive: boolean;
  ledHeadlights: boolean;
  xenonHeadlights: boolean;
  slidingTiltingRoof: boolean;
  automaticallyFoldingDoorMirrors: boolean;
  seatHeating: boolean;
  parkingAssistanceCamera: boolean;
  automaticallyDimmingInteriorMirror: boolean;
  steeringHeating: boolean;
  hud: boolean;
  laneAssistant: boolean;
  automaticHighBeam: boolean;
  blindSpotMonitor: boolean;
  preCrashAssistent: boolean;
  bluetooth: boolean;
  rainSensor: boolean;
  lightSensor: boolean;
  smartEntry: boolean;
  androidAuto: boolean;
  appleCarPlay: boolean;
  emissionStandard?: number;
  combinedPowerHp?: number;
  combinedPowerKw?: number;
  wltpCarbonOutput?: number;
  electricPowerHp?: number;
  electricPowerKw?: number;
};

type State = {
  keys?: number;
  keysRemote?: number;
  maintenanceBook: boolean;
  dealerMaintained: boolean;
  damages: [];
  pros: [];
  cons: [];
  tyres: {};
  numberOfOwners?: number;
};

type Accessory = {
  name: string;
  items: string[];
};

type ExtraFields = {
  vehiclePurpose: string;
  drivingOption: string;
  customizationOptions: [];
};

type ExtraInformation = {
  key: string;
  value: string;
};

type UsageInfo = {
  mrbCosts: MrbCost[];
  insuranceCost: [];
  fuelCosts: [];
};

type MrbCost = {
  province: string;
  costPerMonth: number;
};

export type CarApiResponse = {
  data: CarData[];
};
