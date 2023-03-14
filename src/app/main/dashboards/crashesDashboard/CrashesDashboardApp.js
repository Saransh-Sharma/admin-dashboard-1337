import withReducer from 'app/store/withReducer';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import reducer from '../dashStore';
import { getWidgets, selectWidgets } from '../dashStore/widgetsSlice';
import CrashesDashboardAppHeader from './CrashesDashboardAppHeader';
import StoreVsCurrentCrashesWidget from '../dashWidgets/StoreVsCurrentCrashesWidget';
import CrashesSmallWidget from '../dashWidgets/CrashesSmallWidget';
import NonFatalSmall from '../dashWidgets/NonFatalSmallWidget';
import ANRsSmallWidget from '../dashWidgets/ANRsSmallWidget';
import CrashesLineGraph from '../dashWidgets/CrashesLineGraph';


function CrashesDashboardApp() {
  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);

  return (
    <FusePageSimple
      header={<CrashesDashboardAppHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };

            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };

            return (
              !_.isEmpty(widgets) && (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                 <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                    <CrashesLineGraph />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                    <StoreVsCurrentCrashesWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <CrashesSmallWidget />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <NonFatalSmall />
                  </motion.div>

                  <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
                    <ANRsSmallWidget />
                  </motion.div>

                  <div className="w-full mt-16 sm:col-span-3">
                    <Typography className="text-2xl font-semibold tracking-tight leading-6">
                      Issues
                    </Typography>
                    <Typography className="font-medium tracking-tight" color="text.secondary">
                      List of all Crashes, Non-Fatals, and ANRs
                    </Typography>
                  </div>

                </motion.div>
              )
            );
          }, [widgets])}
        </>
      }
    />
  );
}

export default withReducer('analyticsDashboardApp', reducer)(CrashesDashboardApp);
